import { useRef, useEffect } from 'react';
import { useSettings } from './useSettings';

// 音效系统类型定义
interface AudioContextType extends AudioContext {
  webkitAudioContext?: typeof AudioContext;
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

// 增强的音效系统
class SoundSystem {
  private audioContext: AudioContext | null = null;
  private enabled: boolean = true;
  private initialized: boolean = false;

  async init() {
    if (this.initialized) return;
    
    try {
      const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
      if (AudioContextConstructor) {
        this.audioContext = new AudioContextConstructor();
        this.initialized = true;
      }
    } catch (error) {
      console.warn('音频上下文初始化失败:', error);
      this.enabled = false;
    }
  }

  async playTone(frequency: number, duration: number = 200, type: OscillatorType = 'sine') {
    if (!this.enabled || !this.audioContext) return;

    try {
      if (!this.initialized) {
        await this.init();
      }

      if (this.audioContext?.state === 'suspended') {
        await this.audioContext.resume();
      }

      if (!this.audioContext) return;

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = type;

      gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration / 1000);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + duration / 1000);
    } catch (error) {
      console.warn('播放音效失败:', error);
      this.enabled = false;
    }
  }

  playCorrect() {
    this.playTone(800, 300);
  }

  playIncorrect() {
    this.playTone(300, 500, 'square');
  }

  playClick() {
    this.playTone(600, 100);
  }

  playStreak(level: number) {
    const frequency = 600 + (level * 50);
    this.playTone(frequency, 200);
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  destroy() {
    if (this.audioContext && this.audioContext.state !== 'closed') {
      this.audioContext.close().catch(console.error);
    }
  }
}

export const useSoundSystem = () => {
  const { settings } = useSettings();
  const soundSystemRef = useRef<SoundSystem | null>(null);

  useEffect(() => {
    if (!soundSystemRef.current) {
      soundSystemRef.current = new SoundSystem();
    }

    soundSystemRef.current.setEnabled(settings.soundEnabled);

    return () => {
      soundSystemRef.current?.destroy();
    };
  }, [settings.soundEnabled]);

  const playSound = (soundType: 'correct' | 'incorrect' | 'click' | 'streak', level?: number) => {
    if (!settings.soundEnabled || !soundSystemRef.current) return;

    switch (soundType) {
      case 'correct':
        soundSystemRef.current.playCorrect();
        break;
      case 'incorrect':
        soundSystemRef.current.playIncorrect();
        break;
      case 'click':
        soundSystemRef.current.playClick();
        break;
      case 'streak':
        soundSystemRef.current.playStreak(level || 1);
        break;
    }
  };

  return { playSound };
};
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'  // 不需要 .tsx 扩展名
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
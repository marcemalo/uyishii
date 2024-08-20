import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./language/i18next.js"
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>)
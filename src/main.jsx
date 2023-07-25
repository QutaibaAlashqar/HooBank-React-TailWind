import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LogIn } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GetStartedPage } from "./components";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/GetStartedPage" element={<GetStartedPage />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

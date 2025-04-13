import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import IconGallery from './pages/IconGallery'
import UsageExamples from './pages/UsageExamples'
import './global.css'
export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="sidebar">
          <h1>SVG 图标库</h1>
          <ul>
            <li><Link to="/">图标展示</Link></li>
            <li><Link to="/usage">使用示例</Link></li>
          </ul>
        </nav>
        
        <main className="content">
          <Routes>
            <Route path="/" element={<IconGallery />} />
            <Route path="/usage" element={<UsageExamples />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
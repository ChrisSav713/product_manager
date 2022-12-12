import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './views/Main'
import ViewDetail from './views/ViewDetail'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" default element={<Main/>} />
        <Route path="/:id" element={<ViewDetail/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

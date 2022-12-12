import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './views/Main'
import ViewDetail from './views/ViewDetail'
import Update from './components/Update'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" default element={<Main/>} />
        <Route path="/:id" element={<ViewDetail/>} />
        <Route path="/edit/:id" element={<Update/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

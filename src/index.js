import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './home';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/chose" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    <Toaster/>
  </Router>
);


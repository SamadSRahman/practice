import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import { AboutUs } from './pages/About US/aboutUs';
import { Login } from './pages/Login/login';
import { Register } from './pages/Register/register';
import { Home } from './pages/Home/home';
import { LuckyNum } from './components/luckynum/luckyNum';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    <Routes>
    <Route path='/' element={<LuckyNum/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

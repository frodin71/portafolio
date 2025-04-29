import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 1000, // Duración de cada animación en milisegundos
    easing: 'ease-out-cubic', // Cómo acelera y desacelera
    once: true, // Solo animar una vez (no repetir al volver a hacer scroll)
});
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from '../components/Button';
export default function Home() {
    return (_jsx("section", { id: "home", className: "min-h-screen from-gray-100 via-blue-50 to-white pt-24 flex flex-col items-center justify-center text-center px-4 animate-fadeIn", children: _jsxs("div", { children: [_jsxs("h2", { className: "text-5xl md:text-6xl font-extrabold text-gray-800 mb-6", children: ["\u00A1Hola! Soy ", _jsx("span", { className: "text-indigo-600", children: "[Tu Nombre]" })] }), _jsx("p", { className: "text-xl md:text-2xl text-gray-600 mb-10", children: "Desarrollador apasionado por crear proyectos de calidad y c\u00F3digo abierto \uD83D\uDE80" }), _jsxs("div", { className: "flex flex-wrap justify-center gap-6", children: [_jsx(Button, { href: "#projects", variant: "primary", children: "Ver Proyectos" }), _jsx(Button, { href: "/cv.pdf", variant: "secondary", download: true, children: "Descargar CV" })] })] }) }));
}

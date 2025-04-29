import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: 'home', offset: document.getElementById('home')?.offsetTop || 0 },
                { id: 'projects', offset: document.getElementById('projects')?.offsetTop || 0 },
                { id: 'contact', offset: document.getElementById('contact')?.offsetTop || 0 },
            ];
            const scrollPosition = window.scrollY + 150;
            const currentSection = sections.reduce((acc, section) => {
                return scrollPosition >= section.offset ? section.id : acc;
            }, 'home');
            setActiveSection(currentSection);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (_jsxs("nav", { className: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white fixed top-0 w-full z-50 shadow-lg", children: [_jsxs("div", { className: "max-w-7xl mx-auto px-6 py-4 flex justify-between items-center", children: [_jsx("h1", { className: "text-2xl font-bold tracking-wide", children: "Mi Portafolio" }), _jsx("div", { className: "lg:hidden", children: _jsx("button", { onClick: toggleMenu, children: menuOpen ? _jsx(X, { size: 28 }) : _jsx(Menu, { size: 28 }) }) }), _jsxs("div", { className: "hidden lg:flex space-x-8 text-lg", children: [_jsx(NavLink, { href: "#home", activeSection: activeSection, closeMenu: closeMenu, children: "Inicio" }), _jsx(NavLink, { href: "#projects", activeSection: activeSection, closeMenu: closeMenu, children: "Proyectos" }), _jsx(NavLink, { href: "#contact", activeSection: activeSection, closeMenu: closeMenu, children: "Contacto" })] })] }), menuOpen && (_jsxs("div", { className: "flex flex-col items-center space-y-6 bg-indigo-500 py-6 lg:hidden", children: [_jsx(NavLink, { href: "#home", activeSection: activeSection, closeMenu: closeMenu, children: "Inicio" }), _jsx(NavLink, { href: "#projects", activeSection: activeSection, closeMenu: closeMenu, children: "Proyectos" }), _jsx(NavLink, { href: "#contact", activeSection: activeSection, closeMenu: closeMenu, children: "Contacto" })] }))] }));
}
function NavLink({ href, children, activeSection, closeMenu, }) {
    const id = href.replace('#', '');
    return (_jsx("a", { href: href, onClick: closeMenu, className: `hover:text-yellow-300 transition-colors duration-300 ${activeSection === id ? 'underline font-bold' : ''}`, children: children }));
}

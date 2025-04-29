import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
function App() {
    return (_jsxs("div", { className: "font-sans min-h-screen bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 animate-gradient-xy", children: [_jsx(Navbar, {}), _jsxs("main", { className: "pt-24 px-4", children: [_jsx(Home, {}), _jsx(Projects, {}), _jsx(Contact, {})] }), _jsx(Footer, {})] }));
}
export default App;

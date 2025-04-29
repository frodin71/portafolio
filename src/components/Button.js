import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ href, children, variant = 'primary', download, target }) => {
    const baseClasses = 'inline-block text-center font-bold rounded-full px-8 py-3 shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95';
    const variants = {
        primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    };
    return (_jsx("a", { href: href, className: `${baseClasses} ${variants[variant]}`, download: download, target: target, rel: target === '_blank' ? 'noopener noreferrer' : undefined, children: children }));
};
export default Button;

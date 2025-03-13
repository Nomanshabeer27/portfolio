import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex justify-between items-center p-4 bg-white-400 bg-opacity-70 backdrop-blur-md shadow-md relative w-full top-0 z-50">
            <div className="text-2xl font-bold text-blue-600">Noman <span className='text-gray-600'>Shabeer</span></div>
            <button
                className="md:hidden focus:outline-none"
                onClick={toggleMenu}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>
            <nav
                className={`${isMenuOpen ? 'block' : 'hidden'
                    } md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 list-none md:flex-row flex-col transition duration-300 text-center `}
            >
                <li><Link className="block md:inline text-gray-700 hover:text-blue-600 transition duration-300 py-2 md:py-0 text-xl" to="/">Home</Link></li>
                <Link className="block md:inline text-gray-700 hover:text-blue-600 transition duration-300 py-2 md:py-0 text-xl" to="/about">About</Link>
                <Link className="block md:inline text-gray-700 hover:text-blue-600 transition duration-300 py-2 md:py-0 text-xl" to="/services">Services</Link>
                <Link className="block md:inline text-gray-700 hover:text-blue-600 transition duration-300 py-2 md:py-0 text-xl" to="/skill">Skill</Link>
                <Link className="block md:inline text-gray-700 hover:text-blue-600 transition duration-300 py-2 md:py-0 text-xl" to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;
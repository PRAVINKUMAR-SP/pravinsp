import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center backdrop-blur-sm fixed top-0 z-[1000] border-b border-white/5">
      <div className="logo">
        <h3 className="text-2xl font-bold tracking-tight">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-[#07b7af] hover:opacity-80 transition-opacity">PRAVINKUMAR S</Link>
        </h3>
      </div>

      <button
        className="hamburger md:hidden flex flex-col gap-1.5"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      <div className={`${isOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 w-full md:w-auto bg-[#040b14] md:bg-transparent flex-col md:flex-row items-center py-6 md:py-0 border-b md:border-none border-white/5`}>
        <ul className="flex flex-col md:flex-row md:gap-20 md:mr-10 gap-4 items-center list-none p-0 m-0">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-xl text-white hover:text-[#6464ff] transition-colors font-medium no-underline"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

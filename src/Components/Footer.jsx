import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer w-full bg-[#19192d] py-12 px-6 mt-12">
      <div className="footer-content max-w-7xl m-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Footer Left */}
        <div className="footer-left space-y-1">
          <h1 className="text-[20px] font-bold text-[#6464ff] tracking-widest uppercase">
            PRAVINKUMAR S
          </h1>
          <p className="text-white text-lg">
            FullStack Developer
          </p>
        </div>

        {/* Footer Center */}
        <div className="footer-center flex flex-col items-center">
          <h2 className="text-xl font-bold text-[#6464ff] mb-6">Quick Links</h2>
          <ul className="footer-links flex flex-col gap-4 items-center">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-white hover:text-indigo-400 font-medium transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Right */}
        <div className="footer-right flex flex-col items-center">
          <h2 className="text-xl font-bold text-[#6464ff] mb-6">Connect</h2>
          <div className="socials flex gap-4">
            {[
              { icon: 'fa-brands fa-whatsapp', link: 'https://wa.me/917397555364' },
              { icon: 'fa-brands fa-instagram', link: 'https://www.instagram.com/pravin_tn61/' },
              { icon: 'fa-brands fa-youtube', link: 'https://youtube.com/@opffarmy01?si=fTM-Sr-JGp-bosrv' },
              { icon: 'fa-brands fa-linkedin', link: 'https://www.linkedin.com/in/pravinkumar-s-52b1b32b1/' }
            ].map((social, i) => (
              <li key={i} className="list-none">
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center transition-transform hover:scale-110"
                >
                  <i className={`${social.icon} text-3xl text-white`}></i>
                </a>
              </li>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center mt-12 text-[#08cac0]">&copy; 2025 PRAVINKUMAR S. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

import React from "react";
import Navbar from "../Components/Navbar";
import profile from "../assets/prof.jpeg";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#040b14]">
      <Navbar />
      <div className="home-content flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 gap-12 md:gap-24 mt-20! md:mt-0 min-h-[calc(100vh-100px)]">
        <div className="content-left order-1 md:order-1 opacity-0 -translate-x-10 animate-[slideDown_800ms_ease-out_forwards]">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] to-[#07b7af] rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={profile}
              alt="Pravinkumar S"
              className="relative w-64 h-64 md:w-[480px] md:h-[480px] aspect-square object-cover rounded-full border-4 border-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
        <div className="content-right order-2 md:order-2 opacity-0 translate-x-10 animate-[slideDown_800ms_ease-out_forwards]">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Hello, I'm
          </h1>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#6366f1] mb-4">
            <Typewriter
              options={{
                strings: ["PRAVINKUMAR S"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h1>
          <h3 className="text-2xl md:text-3xl font-bold text-[#07b7af] mb-6">
            Full Stack Developer
          </h3>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-xl">
            I am a passionate Full Stack developer with experience in creating
            dynamic and responsive web applications. I love to bring ideas to life
            in the browser using modern web technologies.
          </p>
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { icon: 'fa-brands fa-whatsapp', link: 'https://wa.me/8072628827' },
              { icon: 'fa-brands fa-instagram', link: 'https://www.instagram.com/pravin_tn61/' },
              { icon: 'fa-brands fa-youtube', link: 'https://youtube.com/@opffarmy01?si=fTM-Sr-JGp-bosrv' },
              { icon: 'fa-brands fa-linkedin', link: 'https://www.linkedin.com/in/pravinkumar-s-52b1b32b1/' },
              { icon: 'fa-brands fa-github', link: 'https://github.com/pravinkumar-s' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center transition-transform hover:scale-110 bg-white/5 rounded-full p-2 border border-white/10 hover:border-[#6366f1]/50"
              >
                <i className={`${social.icon} text-2xl text-white`}></i>
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <Link to="/contact" className="bg-[#4f46e5] hover:bg-[#6366f1] text-white px-8 py-3 rounded-lg font-bold transition-all text-xl shadow-lg">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

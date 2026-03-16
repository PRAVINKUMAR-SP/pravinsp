import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-24 pb-16 px-6">
      <Navbar />
      <div className="about-section max-w-7xl mx-auto">
        <div className="container mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#6464ff] inline-block mb-2">
            About Me
          </h1>
          <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          <div className="card-professional p-6 md:p-8 bg-[#111827] border border-indigo-500/30 rounded-2xl">
            <p className="text-[16px] md:text-xl text-gray-300 leading-relaxed">
              I’m <strong>Pravinkumar S</strong>, a Full‑stack Developer with a B.E.
              in Computer Science Engineering from
              <strong> Sri Sai Ranganathan College, Coimbatore</strong>. I build
              responsive and accessible web applications using
              <em> HTML, CSS, JavaScript (React)</em> on the front end and
              <em> Node.js/Express</em> with databases like <em>MongoDB</em> or
              <em> PostgreSQL</em> on the back end. I focus on writing clean,
              maintainable code and shipping end‑to‑end features from design to
              deployment.
            </p>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              <strong>Highlights:</strong> Developed multiple portfolio projects
              demonstrating UI design, REST APIs, and cloud deployment. Comfortable
              with Git, debugging, and collaborating in agile teams. I’m actively
              looking for software engineering roles where I can contribute to
              scalable web systems.
            </p>
          </div>

          <ul className="about-list grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Education', content: 'B.E., Computer Science Engineering at Sri Sai Ranganathan College, Coimbatore' },
              { title: 'Technologies', content: 'HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, PostgreSQL, Git' },
              { title: 'Focus', content: 'Responsive UI, APIs, performance, and team collaboration' }
            ].map((item, index) => (
              <li key={index} className="card-professional w-100! p-8 bg-[#111827] border border-indigo-500/30 rounded-2xl transition-transform hover:-translate-y-2">
                <h2 className="text-[#6464ff] text-2xl mb-4 font-bold">{item.title}</h2>
                <p className="text-[#08cac0] text-lg leading-relaxed">{item.content}</p>
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-6 mt-16">
            <Link to="/projects" className="bg-[#4545c4] hover:bg-[#6464ff] text-white px-8 py-3 rounded-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-lg">See my projects</Link>
            <Link to="/contact" className="border border-[#4545c4] text-white hover:bg-[#4545c4] px-8 py-3 rounded-lg font-bold transition-all hover:scale-105 active:scale-95">Contact me</Link>
            <Link to="/resume" className="bg-[#4545c4] hover:bg-[#6464ff] text-white px-8 py-3 rounded-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-lg">See my Resume</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

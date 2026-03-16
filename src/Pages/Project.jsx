import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Project = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-24 pb-16 px-6">
      <Navbar />
      <div className="project-content max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#6464ff] inline-block mb-4">
            My Projects
          </h1>
          <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Ecommerce Website',
              desc: 'I developed a full-featured e-commerce website using MERN Stack, React for the front end and Node.js, Express.js and mongoDB for the back end. Implemented user authentication, product management, and a shopping cart system, admin panel, and payment integration.',
              icon: '🛍️'
            },
            {
              title: 'Portfolio Website',
              desc: 'This is my personal portfolio website to showcase my skills, projects, and experience. Used HTML, CSS, and JavaScript to create a responsive and visually appealing design. Implemented smooth scrolling, animations, and contact form functionality.',
              icon: '👤'
            },
            {
              title: 'E-Ticketing',
              desc: 'Developed an E-Ticketing system for booking movie tickets and traveling tickets online using MERN Stack, React for the front end and Node.js, Express.js and mongoDB for the back end. Implemented features such as user registration, ticket listings, seat selection, and payment processing.',
              icon: '🎟️'
            },
            {
              title: 'Student Details Management',
              desc: 'Created a Student Details Management System using CRUD Operation in MERN Stack. Implemented CRUD operations, search functionality, and data validation to manage student records efficiently.',
              icon: '🎓'
            },
            {
              title: 'Avatar Based Ai Speech To Speech Conversation',
              desc: 'Developed an Avatar-Based AI Speech-to-Speech Conversation System in my final year project using React for the front end and Node.js, Express.js and mongoDB for the back end. Implemented features such as avatar customization, real-time speech recognition, and natural language processing.',
              icon: '🤖'
            }
          ].map((project, index) => (
            <div key={index} className="card-professional p-6 md:p-8 bg-[#111827] border border-indigo-500/30 rounded-2xl flex flex-col group hover:-translate-y-2 transition-transform">
              <div className="text-4xl mb-4">{project.icon}</div>
              <h2 className="text-[#6464ff] text-2xl mb-4 font-bold">
                {project.title}
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-6 flex-1">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;

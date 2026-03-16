import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Skills = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-24 pb-16 px-6">
      <Navbar />
      <div className="skills-contents max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#6464ff] inline-block mb-4">
            Skills & Expertise
          </h1>
          <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Frontend",
              skills: [
                { name: "HTML", icon: "devicon-html5-plain colored" },
                { name: "CSS", icon: "devicon-css3-plain colored" },
                { name: "JavaScript", icon: "devicon-javascript-plain colored" },
                { name: "React", icon: "devicon-react-original colored" },
                { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
                { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" }
              ]
            },
            {
              title: "Backend",
              skills: [
                { name: "Node.js", icon: "devicon-nodejs-plain colored" },
                { name: "Express.js", icon: "devicon-express-original" },
                { name: "Spring Boot", icon: "devicon-spring-plain colored" }
              ]
            },
            {
              title: "Database & Tools",
              skills: [
                { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
                { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
                { name: "Git", icon: "devicon-git-plain colored" },
                { name: "GitHub", icon: "devicon-github-original" }
              ]
            },
            {
              title: "Cloud",
              skills: [
                { name: "AWS", icon: "fa-brands fa-aws" }
              ]
            },
            {
              title: "Programming",
              skills: [
                { name: "C", icon: "devicon-c-plain colored" },
                { name: "C++", icon: "devicon-cplusplus-plain colored" },
                { name: "Python", icon: "devicon-python-plain colored" },
                { name: "Java", icon: "devicon-java-plain colored" }
              ]
            },
            {
              title: "Tools",
              skills: [
                { name: "VS Code", icon: "fa-solid fa-code" },
                { name: "Microsoft Tools", icon: "fa-brands fa-microsoft" }
              ]
            },
            {
              title: "Language",
              skills: [
                { name: "Tamil", icon: "fa-solid fa-language" },
                { name: "English", icon: "fa-solid fa-language" }
              ]
            }
          ].map((category, index) => (
            <div key={index} className="card-professional p-6 md:p-8 bg-[#111827] border border-indigo-500/30 rounded-2xl group hover:-translate-y-2 transition-transform">
              <h2 className="text-[#6464ff] text-2xl mb-6 font-bold border-b border-indigo-500/10 pb-2">
                {category.title}
              </h2>
              <ul className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 group/item">
                    <i className={`${skill.icon} text-2xl filter group-hover/item:brightness-125 transition-all`}></i>
                    <span className="text-[#cbd5f5] font-medium group-hover/item:text-white transition-colors">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;

import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../App.css";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-24 pb-16 px-6">
      <Navbar />
      <div className="contact-container max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#6464ff] inline-block mb-4">
            Contact Me
          </h1>
          <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-[#020630] p-8 md:p-12 rounded-[50px] shadow-2xl border border-indigo-500/20">
          <form action="/post" method="post" className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xl font-medium text-white">Name:</label>
                <input
                  className="bg-white rounded-lg h-12 px-4 text-black focus:ring-2 focus:ring-indigo-500 outline-none"
                  type="text" id="name" name="name" required placeholder="Enter your Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xl font-medium text-white">Email:</label>
                <input
                  className="bg-white rounded-lg h-12 px-4 text-black focus:ring-2 focus:ring-indigo-500 outline-none"
                  type="email" id="email" name="email" required placeholder="Enter your Email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xl font-medium text-white">Message:</label>
              <textarea
                className="bg-white rounded-lg p-4 text-black focus:ring-2 focus:ring-indigo-500 outline-none"
                id="message" name="message" rows="5" required placeholder="Enter your Messages"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 px-10 py-4 bg-[#4545c4] hover:bg-[#6464ff] text-white font-bold rounded-lg transition-all mx-auto text-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

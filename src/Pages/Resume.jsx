import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Resume = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 md:pt-24">
        <div className="w-full flex justify-center py-5 md:py-10">
          <div className="w-[98%] md:w-[90%] lg:max-w-4xl">
            <div className="bg-gray-100 p-3 md:p-5 rounded-lg h-96 md:h-screen">
              <object
                data="/Pravinkumar.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
                className="rounded"
              >
                <p>
                  PDF failed to load.{" "}
                  <a
                    href="/pravin.pdf"
                    download="pravin.pdf"
                    className="text-indigo-700 underline"
                  >
                    Download Resume
                  </a>
                </p>
              </object>
            </div>
            <div className="text-center mt-5">
              <a
                href="/pravin.pdf"
                download="pravin.pdf"
                className="bg-indigo-700 text-white px-4 md:px-6 py-2 rounded-md hover:bg-indigo-800 inline-block text-[14px] md:text-[16px]"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-100">
        <Footer />
      </div>
    </>
  );
};

export default Resume;

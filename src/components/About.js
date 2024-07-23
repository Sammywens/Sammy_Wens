import React from "react";

const About = () => {
  return (
    <div className="bg-[#000] w-[100%]" id="about">
      <h1 className="text-white text-[40px] font-bold text-center pt-[80px] md:pb-[30px] px-[20px] md:text-left">
        About
      </h1>
      <div className="flex flex-row p-[70px] lg:flex-col md:p-[20px] ">
        <div className="w-[50%] lg:w-[100%]  lg:flex lg:justify-center">
          <div className="bg-[#0a0a0a] h-[420px] w-[420px]  rounded-lg shadow-2xl flex justify-center overflow-hidden hover:scale-[1.05] ease-in duration-500">
            <img
              src="/images/portfolio.jpg"
              alt="wens"
              className="h-[100%] w-[80%] rounded-lg shadow-2xl hover:scale-[1.05] ease-in duration-500 md:w-[100%]"
            />
          </div>
        </div>
        <div className="w-[50%] bg-[#0a0a0a] p-[20px] flex flex-col rounded-lg shadow-2xl lg:w-[100%]  lg:flex lg:justify-center md:mb-[100px] lg:mt-[40px] md:p-[20px] md:px-[20px]">
          <p className="text-[18px] text-white">
            Welcome to my Portfolio, I'm Samuel Nwene a confident and passionate Full-Stack Developer
            with experience in developing robust applications that matches clients needs. 
            Experienced with a strong skill set in HTML, CSS, JavaScript,Node.js,Express.js and popular frameworks. 
            My main focus is centered around building API's that deliver responsive, high-performance and seamless integration with web applications to deliver exceptional user experience. 
            As an Avid learner, I'm Committed to staying up-to-date with industry trends and continuously improving skills.
            <br />
            <br />
            Passionate about creating visually appealing and intuitive interfaces that enhance user experience and drive business goals.
            I'm also very good with relational and no SQl Databases like MongoDB.
          </p>
          <button className="btn">
            <a
              href="https://docs.google.com/document/d/16f79uXuubXoT-VIji6Xa1Gfole0JZuv-KvKplRWp4hA/edit?usp=sharing"
              target="_blank"
            >
              View Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

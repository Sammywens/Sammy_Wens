import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  const media_icons =
    "text-[28px] pl-[15px] pb-[10px] hover:text-[#FF9900] ease-in duration-100";

  return (
    <div className="" id="contact">
      <div className="flex flex-col px-[20px] pt-[20px] mb-[0px] bg-[#000]">
        <div className="text-white text-[40px] pt-[40px] pb-[20px] font-bold text-center md:py-[40px] md:text-left">
          Get in Touch
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[100%] h-[5vh] flex flex-col justify-center items-center">
            <div className="w-[100%] text-white text-center md:text-left lg:mt-[-20px]">
              <a
                href="callto:09024420929"
                className="pr-[100px] hover:text-[#FF9900] ease-in duration-100 md:pr-[50px]"
              >
                Call Me &nbsp; <FontAwesomeIcon icon={faPhone} />
              </a>
              <a
                href="mailto:nwene.samuel@gmail.com"
                className="hover:text-[#FF9900] ease-in duration-100"
              >
                Email &nbsp; <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
          <div className="w-[100%] h-[10vh] flex flex-col justify-center items-center">
            <div className="w-[100%] text-white text-center md:text-left">
              <ul className="flex flex-row justify-center md:justify-start">
                <li>
                  <a
                    href="https://ec.linkedin.com/in/samuel-nwene"
                    target="blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-[28px] pb-[10px] hover:text-[#FF9900] ease-in duration-100"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/Sammie_wenss" target="blank">
                    <FontAwesomeIcon icon={faTwitter} className={media_icons} />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Sammywens" target="blank">
                    <FontAwesomeIcon icon={faGithub} className={media_icons} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/sammy.wens" target="blank">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className={media_icons}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/2347015088899" target="blank">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className={media_icons}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-[100%] h-[10vh] bg-[#0f0f0f] p-[20px]">
        <div className=" text-white text-center md:text-left">
          <span>
            Created By{" "}
            <a
              href="#home"
              className="hover:text-[#FF9900] ease-in duration-100"
            >
              SammyWens
            </a>{" "}
            | 2024 All Rights Reserved
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer className="relative bottom-0 left-0 h-[10vh] flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 py-5 sm:px-20">
      <section className="text-lg">
        Copyright {year} | All right reserved.
      </section>
      <section className="flex items-center justify-center gap-5 text-2xl text-white">
        <a className="hover:text-yellow-500 transition-all ease-in-out duration-300 cursor-pointer">
          <BsFacebook />
        </a>
        <a className="hover:text-yellow-500 transition-all ease-in-out duration-300 cursor-pointer">
          <BsInstagram />
        </a>
        <a className="hover:text-yellow-500 transition-all ease-in-out duration-300 cursor-pointer">
          <BsLinkedin />
        </a>
        <a className="hover:text-yellow-500 transition-all ease-in-out duration-300 cursor-pointer">
          <BsTwitter />
        </a>
      </section>
    </footer>
  );
}

export default Footer;

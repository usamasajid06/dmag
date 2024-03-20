import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-5xl text-4xl mb-4 font-normal text-gray-900">
            GET IN TOUCH
          </h1>
          <p class="mb-8 leading-relaxed text-gray-800">
            Ready to make your move? <br />
            We're here to help. Use the form below to reach out, and let's start
            your real estate journey together!
          </p>

          <h1 class="title-font sm:text-2xl text-xl flex mb-4 text-gray-900">
            <MdOutlineLocationOn className="mr-4 text-4xl" /> OFFICE
          </h1>
          <p class="mb-8 leading-relaxed text-gray-800">
            Dmag International Properties LLC <br />
            Office #205, Ontario Tower, Business Bay, Dubai, UAE PO Box. 504499
          </p>

          <h1 class="title-font sm:text-2xl text-xl flex mb-4 text-gray-900">
            <MdLocalPhone className="mr-4 text-4xl" /> PHONE
          </h1>
          <p class="mb-8 leading-relaxed text-gray-800">+971 50 530 6401</p>

          <h1 class="title-font sm:text-2xl text-xl flex mb-4 text-gray-900">
            <MdOutlineMail className="mr-4 text-4xl" /> EMAIL
          </h1>
          <p class="mb-8 leading-relaxed text-gray-800">info@dmag.ae</p>

          <h1 class="title-font sm:text-3xl text-2xl mb-4 text-gray-900">
            Follow Us
          </h1>
          <div className="flex gap-4 text-2xl">
            <FaFacebook className="cursor-pointer" />
            <FaSquareInstagram className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto">
          <img
            class="object-cover object-center rounded mx-auto"
            alt="hero"
            src="https://dmag.ae/frontend/assets/img/ELEMENTS/Bottom.webp"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

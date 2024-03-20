import React from "react";

const Footer = () => {
  return (
    <footer>
      <hr className="mx-16" />
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-900 cursor-pointer sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Home
        </p>
        <p className="text-sm text-gray-900 cursor-pointer sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          About Us
        </p>
        <p className="text-sm text-gray-900 cursor-pointer sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Services
        </p>
        <p className="text-sm text-gray-900 cursor-pointer sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Properties
        </p>
        <p className="text-sm text-gray-900 cursor-pointer sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          News
        </p>
        <p className="text-sm text-gray-900 cursor-pointer sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Contact
        </p>
        <p className="text-sm text-gray-900 cursor-pointer sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Terms of Use
        </p>
        <p className="text-sm text-gray-900 cursor-pointer sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Privacy Policy
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <p>© 2024 - DMAG</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

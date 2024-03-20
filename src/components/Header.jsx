import logo from "../assets/logo.png";
import { FaWhatsapp } from "react-icons/fa";
import backgroundImage from ".././assets/bg.jpg";
import { FiMenu } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import { useClickAway } from "react-use";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  useClickAway(menuRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backdropFilter: "blur(5px)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {isOpen ? (
          <motion.nav
            ref={menuRef}
            className="absolute flex flex-col gap-5 justify-center items-center text-white md:w-96 sm:w-80 h-screen p-20 z-50 bg-white text-2xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <RxCross2
              className="text-3xl text-black hover:text-green-800 cursor-pointer absolute right-8 top-8"
              onClick={toggleMenu}
            />
            <a className="text-black cursor-pointer hover:text-green-800">
              HOME
            </a>
            <a className="text-black cursor-pointer hover:text-green-800">
              ABOUT US
            </a>
            <a className="text-black cursor-pointer hover:text-green-800">
              PROJECTS
            </a>
            <a className="text-black cursor-pointer hover:text-green-800">
              SERVICES
            </a>
            <a className="text-black cursor-pointer hover:text-green-800">
              NEWS & BLOGS
            </a>
            <a className="text-black cursor-pointer hover:text-green-800">
              CONTACT
            </a>
          </motion.nav>
        ) : (
          ""
        )}
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-evenly">
          <div className="flex lg:w-2/5 text-white text-4xl flex-wrap items-center">
            <FiMenu className="cursor-pointer" onClick={toggleMenu} />
          </div>

          <a className="flex lg:w-1/5 items-center">
            <img src={logo} width="160px" alt="LOGO" />
          </a>
          <div className="lg:w-2/5 flex gap-4 justify-end">
            <div className="hidden lg:flex">
              <FaWhatsapp className="text-white text-4xl cursor-pointer" />
            </div>
            <button className="hidden lg:flex bg-transparent border border-white text-white py-1 px-3 focus:outline-none rounded">
              Find Your Home
            </button>
          </div>
        </div>

        <section>
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col sm:h-full md:h-screen relative z-10">
            <div className="lg:w-2/3 w-full">
              <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-white">
                DMAG : <br /> WHERE DREAMS FIND THEIR HOME
              </h1>
              <p className="mb-8 leading-relaxed text-white text-xl">
                EXPLORE THE BEST PROPERTIES TO INVEST IN DUBAI
              </p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Put Any Keyword..."
                  className="w-full py-2 px-4 bg-transparent border border-white focus:outline-none focus:border-blue-500 mr-2"
                />
                <button
                  type="submit"
                  className="py-2 px-4 bg-green-900 text-white hover:bg-green-800 focus:outline-none"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;

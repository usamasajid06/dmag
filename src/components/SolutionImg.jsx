import React from "react";
import solutions from ".././json/solutions.json";
import styles from "./Solution.module.css";

const SolutionImg = () => {
  return (
    <div className="container mx-auto flex flex-wrap justify-center items-center">
      {solutions.map((solution, index) => (
        <div key={index} className="relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <img
            src={solution.img}
            alt="image"
            className="w-full h-full object-cover"
          />
          <span
            className={`${styles.vertical} absolute bottom-0 left-0 text-3xl text-white vertical-text p-2`}
          >
            {solution.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SolutionImg;

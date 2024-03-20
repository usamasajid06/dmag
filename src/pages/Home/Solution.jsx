import SolutionImg from "../../components/SolutionImg";

const Solution = () => {
  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-lg text-gray-900 tracking-widest font-medium title-font mb-4">
            DYNAMIC REALTY SOLUTIONS
          </h2>
          <h1 className="sm:text-3xl text-4xl font-bold title-font mb-12 text-gray-900">
            INTEGRATED. EXPANSIVE. SYNERGISTIC.
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Discover an integrated approach to real estate with our versatile
            services. From prime commercial spaces to expansive plots and
            collaborative joint ventures, we provide synergistic solutions that
            redefine the possibilities of your property ventures. At the
            intersection of innovation and expertise, we redefine possibilities,
            ensuring your real estate experience is not only strategic but also
            marked by seamless synergy.
          </p>
        </div>

        <SolutionImg />
      </div>
    </section>
  );
};

export default Solution;

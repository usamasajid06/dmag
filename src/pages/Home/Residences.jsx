import ResidenceSwiper from "../../components/ResidenceSwiper";

const Residences = () => {
  return (
    <section>
      <div className="container px-4 mx-auto mt-28">
        <div className="flex flex-col text-center w-full mb-8">
          <h2 className="text-lg text-gray-900 tracking-widest font-medium title-font mb-4">
            DISCOVER DUBAI'S EXCLUSIVE OFF-PLAN RESIDENCES
          </h2>
          <h1 className="sm:text-3xl text-4xl font-bold title-font mb-12 text-gray-900">
            LUXURIOUS. INNOVATIVE. EXCLUSIVE
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Step into luxury with our exclusive Off-Plan Properties in Dubai.
            Elevate your lifestyle with visionary designs, stunning views, and
            top-tier amenities. Your dream home is more than a vision; it's a
            reality waiting to be discovered. Redefine your living in the heart
            of Dubai with our selected properties – where your dream home
            becomes your home. Welcome to a world of elegance, welcome home.
          </p>
        </div>
      </div>
      <ResidenceSwiper />
    </section>
  );
};

export default Residences;

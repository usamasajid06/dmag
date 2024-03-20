import backgroundImage from "../../assets/newsletter.jpg";

const NewsLetter = () => {
  return (
    <section
      className="mt-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backdropFilter: "blur(5px)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col sm:h-full md:h-screen relative z-10">
        <div className="lg:w-2/3 w-full">
          <div className="flex flex-col text-center justify-center items-center">
            <p className="mb-8 leading-relaxed text-white text-xl">
              SUBSCRIBE TO OUR NEWSLETTER.
            </p>
            <h1 className="sm:text-4xl text-3xl mb-20 font-bold text-white">
              INSIGHT. UPDATES. CONNECTED.
            </h1>

            <p className="mb-8 leading-relaxed text-white text-lg">
              Unlock exclusive real estate insights with our dynamic newsletter,
              delivering curated updates, market trends, and insider
              perspectives. Stay ahead in the property world with our concise,
              informative, and timely dispatches. becomes your home. Welcome to
              a world of elegance, welcome home.
            </p>
          </div>

          <div className="flex">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full py-2 px-4 bg-transparent border text-white bg-green-800 border-white focus:outline-none focus:border-white mr-2"
            />
            <button
              type="submit"
              className="py-2 px-4 bg-white text-black hover:bg-white focus:outline-none"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

import backgroundImage from "../../assets/servicePhoto.jpg";

const Services = () => {
  return (
    <div>
      <h1 class="sm:text-2xl text-2xl font-semibold text-center mb-16 text-gray-900">
        | OUR SERVICES |
      </h1>
      <section
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backdropFilter: "blur(5px)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <iframe
              className="w-full h-72"
              src="https://www.youtube.com/embed/2aChEm6_AeU"
              title="DMAG International Properties LLC (Introducing The New Brand of Dubai Real Estate)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              ABOUT DMAG
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              At DMAG International Properties, we take pride in being a premier
              real estate agency in Dubai, dedicated to providing exceptional
              service and unparalleled expertise to our clients worldwide
              <br /> <br />
              Our vision at DMAG International Properties is to be the leading
              provider of luxury real estate solutions in Dubai and beyond. We
              aspire to set new standards of excellence in the industry by
              delivering unparalleled service and building enduring
              relationships with our clients.
            </p>
            <div className="flex flex-wrap justify-center">
              <button className="inline-flex text-white py-2 px-6 text-md mb-2 mr-2">
                | LEARN MORE |
              </button>
              <button className="inline-flex text-white py-2 px-6 text-md mb-2 mr-2">
                | DOWNLOAD COMPANY PROFILE |
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

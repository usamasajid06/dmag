const InterestCard = ({ interests }) => {
  return (
    <div className="flex flex-wrap justify-center gap-16">
      {interests.map((interest) => (
        <div
          key={interest.id}
          className="w-52 h-52 p-10 flex flex-col justify-center items-center border border-y-4 border-y-green-950 hover:border-x-4 hover:border-x-green-950 rounded-full shadow-2xl cursor-pointer transition duration-700 ease-in-out"
        >
          <img
            alt="ecommerce"
            className="w-2/4 object-contain"
            src={interest.img}
          />

          <div className="mt-4">
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {interest.name}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InterestCard;

import interests from "./../../json/interest.json";
import InterestCard from "../../components/InterestCard";

const InterestedSection = () => {
  return (
    <div class="container px-5 py-24 mx-auto">
      <h1 class="sm:text-3xl text-3xl font-bold text-center mb-16 text-gray-900">
        I AM INTERESTED IN
      </h1>
      <InterestCard interests={interests} />
    </div>
  );
};

export default InterestedSection;

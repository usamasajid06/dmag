import { Navigation, Pagination, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styled from "styled-components";
import residences from "./../json/Residence.json";

const ResidenceSwiper = () => {
  const WrapperArrow = styled.section`
    .swiper-button-next {
      border-radius: 50%;
      color: black;
      background-color: rgb(225 215 215);
      width: 40px;
      height: 40px;
      margin-top: 190px;
      margin-right: 200px;

      &:hover {
        background-color: #00afef;
      }
    }
    .swiper-button-prev {
      border-radius: 50%;
      color: black;
      background-color: rgb(225 215 215);
      width: 40px;
      height: 40px;
      margin-top: 190px;
      margin-left: 200px;

      &:hover {
        background-color: #00afef;
      }
    }

    .swiper-button-next::after {
      font-size: 20px;
    }

    .swiper-button-prev::after {
      font-size: 20px;
    }

    .swiper-pagination-bullet {
      height: 5px;
      width: 30px;
      border-radius: 0px;
    }

    @media (max-width: 765px) {
      .swiper-button-next,
      .swiper-button-prev {
        display: none;
      }
    }
  `;

  return (
    <div className="mx-16 my-12 py-5">
      <WrapperArrow>
        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          spaceBetween={1}
          slidesPerView={3}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {residences.map((residence) => (
            <SwiperSlide key={residence.id}>
              <div class="flex flex-wrap mb-32 relative">
                <div>
                  <img
                    alt="img"
                    class="object-cover object-center w-full h-96"
                    src={residence.img}
                  />
                  <div class="absolute inset-0 border-2 p-3 m-3 border-gray-300"></div>

                  <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                </div>
                <div class="absolute bottom-6 left-0 w-full flex flex-col items-center justify-center">
                  <h3 class="text-white md:text-xl sm:text-lg tracking-widest title-font mb-1">
                    {residence.name}
                  </h3>
                  <h2 class="text-white title-font text-lg font-medium">
                    {residence.city}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </WrapperArrow>
    </div>
  );
};

export default ResidenceSwiper;

import blogs from "./../json/blogs.json";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styled from "styled-components";

const BlogCard = () => {
  const WrapperArrow = styled.section`
    .swiper-button-next {
      border-radius: 50%;
      color: black;
      background-color: rgb(225 215 215);
      width: 40px;
      height: 40px;

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
    <div className="container px-5 mx-auto">
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
          {blogs.map((blog) => (
            <SwiperSlide key={blog.ids}>
              <div className="flex flex-wrap">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="w-full object-cover object-center"
                    src={blog.img}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {blog.date}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {blog.title}
                    </h1>
                    <p className="leading-relaxed mb-3">{blog.content}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </WrapperArrow>
    </div>
  );
};

export default BlogCard;

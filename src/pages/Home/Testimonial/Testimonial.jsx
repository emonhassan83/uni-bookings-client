import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Container from "../../../components/Shared/Container/Container";

const Testimonial = () => {
  const [feedbacks, setFeedbacks] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/feedbacks`)
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);

  return (
    <Container>
      <h1 className="primary-font text-3xl sm:text-5xl uppercase mt-16 sm:mt-32  text-center ">
        Client Testimonial
      </h1>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p className="mt-3 italic text-base sm:text-lg text-center mb-10">
        Share Your Experience - We had Love to Hear from You!
      </p>
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {feedbacks &&
            feedbacks.map((feedback) => (
              <SwiperSlide key={feedback._id}>
                <div className="flex flex-col items-center mt-12 lg:mx-24 mb-20">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={feedback.rating}
                    readOnly
                  />
                  <p className="pt-8 pb-4">{feedback.feedback}</p>
                  <h4 className="text-2xl text-yellow-500">{feedback.name}</h4>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </>
    </Container>
  );
};

export default Testimonial;
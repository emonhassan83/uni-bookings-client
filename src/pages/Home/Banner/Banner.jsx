import Container from "../../../components/Shared/Container/Container";
import "./Banner.css";
import BannerInput from "./BannerInput";
const Banner = () => {
  return (
    <div className="banner__container md:text-center">
      <Container>
        <div className="md:w-3/4 mx-auto md:text-center">
          <h1 className="primary-font pt-40 lg:pt-[25vh] text-6xl text-white">
            UniBookings Helping You Discover
          </h1>
          <h4 className="primary-font mt-6 font-semibold text-white text-lg">
            Connecting Youth Across Different and Distance. We help students
            from less privileged backgrounds apply to top universities. Learn
            more about the offerings to choose the approach that best fits you.
          </h4>
        </div>
        <BannerInput />
      </Container>
    </div>
  );
};

export default Banner;

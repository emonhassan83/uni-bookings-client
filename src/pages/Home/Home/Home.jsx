import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import GallerySection from "../Gallery/GallerySection";
import Resources from "../Resources/Resources";
import Testimonial from "../Testimonial/Testimonial";
import TopColleges from "../TopColleges/TopColleges";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Uni Bookings | Home</title>
      </Helmet>
            <Banner/>
            <TopColleges/>
            <GallerySection/>
            <Resources/>
            <Testimonial/>
        </div>
    );
};

export default Home;
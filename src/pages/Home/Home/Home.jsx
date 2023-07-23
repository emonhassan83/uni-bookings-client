import Banner from "../Banner/Banner";
import GallerySection from "../Gallery/GallerySection";
import Testimonial from "../Testimonial/Testimonial";
import TopColleges from "../TopColleges/TopColleges";

const Home = () => {
    return (
        <div>
            <Banner/>
            <TopColleges/>
            <GallerySection/>
            <Testimonial/>
        </div>
    );
};

export default Home;
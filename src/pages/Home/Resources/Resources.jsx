import Container from "../../../components/Shared/Container/Container";
import BlogCard from "./BlogCard";
import BlogsResources from "./BlogsResources";

const Resources = () => {
    const blogData = [
        {
            id: 0,
            img: "https://i.ibb.co/BcyL2kN/section1.jpg",
            title: "Find an Institution",
            description: "Trying to find just the right fit? Colleges who belong to the Study Florida Consortium all have information here! Find out what kind of degrees they offer, where they are located and something about their philosophy.",
        },
        {
            id: 1,
            img: "https://i.ibb.co/V2x90S8/section2.jpg",
            title: "Why Florida?",
            description: "Besides all the fun and sun, Florida has 300 regional and hemispheric headquarters for international companies and the fourth largest economy in the U.S. Florida is built for business, innovation and entrepreneurship!",
        },
        {
            id: 2,
            img: "https://i.ibb.co/ph9kHwh/section3.jpg",
            title: "Florida Linkage Institutes",
            description: "Through the Florida Linkage Institutes, each year up to 25 full-time equivalent students from the respective host countries apply to study in any of the state universities or community colleges in Florida.",
        }
    ]
    return (
        <Container>
            <h2 className="primary-font text-3xl sm:text-5xl uppercase mt-16 sm:mt-32  text-center ">
        Colleges Blog & Resources 
      </h2>
      <p className="mt-3 italic text-base sm:text-lg text-center mb-10">
        Discover our popular blogs and important information resources
      </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                  blogData.map(blog=> <BlogCard key={blog.id} blog={blog}/>)  
                }
            </div>
            <div>
                <BlogsResources/>
            </div>
        </Container>
    );
};

export default Resources;
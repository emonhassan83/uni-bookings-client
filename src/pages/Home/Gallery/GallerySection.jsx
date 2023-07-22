import Container from "../../../components/Shared/Container/Container";

const GallerySection = () => {

  const galleryImages = [
    {
      id: 0,
      img: "https://i.ibb.co/wpjJ40d/korng-sok-Pu1t-YR6vp-HE-unsplash.jpg"
    },
    {
      id: 1,
      img: "https://i.ibb.co/M992H8R/k-mitch-hodge-Uy-CEc-LRpie0-unsplash.jpg"
    },
    {
      id: 2,
      img: "https://i.ibb.co/rc7Qjwr/clem-onojeghuo-Z2-Otk-WTT7h-M-unsplash.jpg"
    },
    {
      id: 3,
      img: "https://i.ibb.co/sKVPnKC/school-teaching-building.jpg"
    },
    {
      id: 4,
      img: "https://i.ibb.co/nmcrmf2/chris-boland-yu-Qbpps3-Tms-unsplash.jpg"
    },
    {
      id: 5,
      img: "https://i.ibb.co/prjp6DJ/valentino-mazzariello-Ndm1hh-Icw-Hc-unsplash.jpg"
    }
  ]

  return (
    <Container>
      <h2 className="primary-font text-3xl sm:text-5xl uppercase mt-16 sm:mt-32  text-center ">
        College Gallery
      </h2>
      <p className="mt-3 italic text-base sm:text-lg text-center mb-10">
        Explore in gallery section and explore our visulations 
      </p>
      
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {
            galleryImages.map((data) => <div key={data.id}>
                <img className="rounded-sm lg:h-[280px]" src={data.img} alt="" />
            </div>)
        }
      </div>
    </Container>
  );
};

export default GallerySection;
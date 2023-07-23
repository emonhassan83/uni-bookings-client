import { useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { BiRightArrowCircle } from "react-icons/bi";
import Container from "../../components/Shared/Container/Container";
import { Helmet } from "react-helmet-async";

const College = () => {
  const collegeData = useLoaderData();
  const {
    college,
    address,
    admission_date,
    admission_process,
    events_details,
    rating,
    research_history,
    research_number,
    research_work,
    sports,
    gallary,
  } = collegeData;

  return (
    <Container>
      <Helmet>
        <title>Uni Bookings | College-Details</title>
      </Helmet>
      <>
        <h1 className="text-2xl font-semibold">{college}</h1>
        <p className="flex items-center gap-1 mt-2 text-sm">
          <CiLocationOn /> {address}
        </p>
        <p className="mt-4 text-sm">
          <span className="font-bold">Recently Research</span>: {research_work}.
        </p>
        <p className="mt-4 text-sm">
          <span className="font-bold">Research History</span>: {research_history}
        </p>
        <p className="mt-4 text-sm">
          <span className="font-bold">College Events:</span> {events_details}
        </p>
        <div className="mt-4">
          <h6 className="text-base font-bold mb-1">
            Admission process and how to apply for admission this college:
          </h6>
          {admission_process.map((process, index) => (
            <p className="text-sm flex gap-1" key={index}>
              <BiRightArrowCircle className="mt-1"/> <span>{process}</span>
            </p>
          ))}
        </div>
        <div className="mt-4">
            <h6 className="font-bold">College Sports Activities:</h6>
            {
                sports.map((sport, index) => <p className="text-sm" key={index}>
                    <span>{sport.sports_category}:</span> <span>{sport.details}</span>
                </p>)
            }
        </div>
        <p className="mt-4 text-sm"><span className="font-bold">Total Research of Number: </span> <span>{research_number}</span></p>
        <p className="mt-2 text-sm"><span className="font-bold">Admission Date: </span><span>{admission_date}</span></p>
        {/* React rating implement */}
      </>
      <>
        <h4 className="primary-font text-2xl font-semibold text-center mt-16 mb-6">
          Explore college Gallery
        </h4>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {gallary.map((image) => (
            <img
              className="rounded-sm"
              key={image._id}
              src={image.image}
              alt=""
            />
          ))}
        </div>
      </>
    </Container>
  );
};

export default College;
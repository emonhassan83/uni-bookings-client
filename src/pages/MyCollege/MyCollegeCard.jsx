//import moment from "moment/moment"

const MyCollegeCard = ({ collegeData }) => {
  const { image, college, events_details, sports, admission_date, research_number, rating } = collegeData;
  
  const sportsCategories = sports.map((item) => item.sports_category);
  // Joining the values with commas
  const sportCategory = sportsCategories.join(", ");
  //const formattedDate = moment(admission_date).format("MMM Do YY");

  return (
    <>
    <div className="card lg:card-side bg-base-100 rounded-lg my-6">
      <img className="md:w-1/2 rounded-sm" src={image} alt="College" />
      <div className="card-body px-2 sm:px-6 md:px-10 md:w-1/2">
        <h2 className="card-title">{college}</h2>
        <p className="text-sm text-gray-600">
          <span className="font-bold">Events:</span> <span>{events_details}</span>
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-bold">Research History:</span> <span>{events_details}</span>
        <p className="text-sm text-gray-600 mt-2"><span className="font-bold">Number of Research:</span> {research_number}</p>
        </p>
        <p className="text-sm text-gray-600"><span className="font-bold">Sports: </span> {sportCategory}.</p>
        <p className="text-sm text-gray-600"><span className="font-bold">Admission Date:</span> {admission_date}</p>
        <p className="text-sm text-gray-600"><span className="font-bold">Ratings:</span> {rating}</p>
      </div>
    </div>
    </>
  );
};

export default MyCollegeCard;

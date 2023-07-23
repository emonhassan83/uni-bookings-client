import { Link } from "react-router-dom";

const Card = ({ collegeData }) => {
  const { _id, college, image, admission_date, rating, research_number } =
    collegeData;

  return (
    <div className="card  bg-base-100">
      <img className="lg:h-[280px]" src={image} alt="College" />
      <div className="card-body">
        <h2 className="text-lg font-semibold">{college}</h2>
        <p className="text-sm -my-1">
          <span className="font-semibold">Admission Date: </span>
          <span>{admission_date}</span>
        </p>
        <p className="text-sm -my-1">
          <span className="font-semibold">Research of Number: </span>
          <span>{research_number}</span>
        </p>
        <p className="text-sm -my-1">
          <span className="font-semibold">Rating:</span> {rating}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/college/${_id}`}>
            <button className="btn btn-sm">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

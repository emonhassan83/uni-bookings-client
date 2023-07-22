import { useEffect, useState } from "react";
import Container from "../../../components/Shared/Container/Container";
import CollegeCard from "./CollegeCard";

const TopColleges = () => {
  const [colleges, setColleges] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/colleges`)
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <Container>
      <h2 className="primary-font text-3xl sm:text-5xl uppercase mt-16 sm:mt-32  text-center ">
        Popular Colleges
      </h2>
      <p className="mt-3 italic text-base sm:text-lg text-center mb-10">
        Discover our popular colleges and find your dream college
      </p>
      <div className="my-6">
        {colleges && colleges.slice(0, 3).map((collegeData) => (
          <CollegeCard key={collegeData._id} collegeData={collegeData} />
        ))}
      </div>
    </Container>
  );
};

export default TopColleges;

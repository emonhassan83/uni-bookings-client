import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container/Container";
import Card from "./Card";
import { Helmet } from "react-helmet-async";

const Colleges = () => {
  const [colleges, setColleges] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/colleges`)
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Uni Bookings | Colleges</title>
      </Helmet>
      <h1 className="primary-font text-xl sm:text-3xl font-semibold uppercase my-4 text-center">
        Select Your College
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {colleges &&
          colleges.map((collegeData) => (
            <Card key={collegeData._id} collegeData={collegeData} />
          ))}
      </div>
    </Container>
  );
};

export default Colleges;

import { useEffect } from "react";
import { useState } from "react";

const Testimonial = () => {
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/feedbacks`)
      .then((res) => res.json())
      .then((data) => setFeedback(data));
  }, []);

  console.log(feedback);
  return <div></div>;
};

export default Testimonial;
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Container from "../../components/Shared/Container/Container";
import MyCollegeCard from "./MyCollegeCard";
import { useForm } from "react-hook-form";
import './MyCollege.css'
import Swal from "sweetalert2";
import { addFeedback } from "../../api/feedback";
import { Helmet } from "react-helmet-async";

const MyCollege = () => {
  const [myColleges, setMyCollege] = useState("");
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const feedbackData = {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
        feedback: data?.feedback,
        rating: data?.rating
    }
    //feedback save in DB
    addFeedback(feedbackData)
      .then((data) => {
        
        Swal.fire({
          icon: "success",
          title: "Yep...",
          text: "Candide feedback add Successfully!",
        });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/myAdmission?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyCollege(data));
  }, [user]);

  return (
    <Container>
      <Helmet>
          <title>Uni Bookings | My-College</title>
        </Helmet>
      <h2 className="primary-font text-2xl sm:text-3xl font-semibold uppercase mt-4 text-center ">
        My Admission Colleges
      </h2>
      <div className="my-6">
        {myColleges &&
          myColleges
            .map((collegeData) => (
              <MyCollegeCard key={collegeData._id} collegeData={collegeData} />
            ))}
      </div>
      <div className="mt-10">
        <h4 className="primary-font text-2xl sm:text-3xl font-semibold uppercase my-4 text-center ">Add Your Comment</h4>
        <div className="comment__card mx-auto">
        <h1 className="sm:text-xl font-semibold mb-4">Add Review</h1>
         <form onSubmit={handleSubmit(onSubmit)}>
         <label className="text-sm sm:text-base">Your Feedback</label>
        <input
          type="text"
          defaultValue=""
          {...register("feedback", { required: true })}
          required
        />

        {errors.feedback && (
          <p className="text-red-500 -mt-5">
            <small>Feedback field is required</small>
          </p>
        )}

         <label className="text-sm sm:text-base">Ratings</label>
        <input
          type="text"
          defaultValue=""
          {...register("rating", { required: true })}
          required
        />

        {errors.rating && (
          <p className="text-red-500 -mt-5">
            <small>Ratings field is required</small>
          </p>
        )}
        <input
          type="submit"
          value="Submit"
          className="btn bg-pink-500 hover:bg-pink-600 border-none btn-block rounded-3xl"
        />
         </form>
        </div>
    </div>
    </Container>
  );
};

export default MyCollege;
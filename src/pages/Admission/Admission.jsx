import { useForm } from "react-hook-form";
import Container from "../../components/Shared/Container/Container";
import { Helmet } from "react-helmet-async";
import "./Admission.css";
import Swal from "sweetalert2";
import { addAdmission } from "../../api/addmission";

const Admission = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const admissionData = {
      college: data?.college,
      name: data?.name,
      subject: data?.subject,
      email: data?.email,
      phone: data?.phone,
      address: data?.address,
      dateOfBirth: data?.dateOfBirth,
      photoURL: data?.photoURL,
    };

    //post admission data in database
    addAdmission(admissionData)
      .then((data) => {
        
        Swal.fire({
          icon: "success",
          title: "Yep...",
          text: "Candide admission post Successfully!",
        });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const selectCollege = [
    {
      id: 0,
      college: "Massachusetts Institute of Technology (MIT) - USA",
    },
    {
      id: 1,
      college: "Stanford University - USA",
    },
    {
      id: 2,
      college: "Harvard University - USA",
    },
    {
      id: 3,
      college: "California Institute of Technology (Caltech) - USA",
    },
    {
      id: 4,
      college: "University of Oxford - United Kingdom",
    },
    {
      id: 5,
      college: "University of Cambridge - United Kingdom",
    },
  ];

  const allCollegeNames = selectCollege.map((college) => college.college);

  return (
    <Container>
      <Helmet>
          <title>Uni Bookings | Admission</title>
        </Helmet>
      <h1 className="primary-font text-2xl text-center uppercase font-semibold mt-4">
        Choose Your Admission
      </h1>
      <div className="mt-6 mb-12 admission-card mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Fill Your Info</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="text-sm sm:text-base">Select College</label>
          <select className="block mt-3 mb-8 w-full text-sm sm:text-base" {...register("college")}>
            {allCollegeNames &&
              allCollegeNames.map((collegeName) => (
                <option key={collegeName} value={collegeName}>
                  {collegeName}
                </option>
              ))}
          </select>

          <label className="text-sm sm:text-base">Candidate Name</label>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            required
          />
          {errors.name && (
            <p className="text-red-500 -mt-5">
              <small>Name field is required</small>
            </p>
          )}

          <label className="text-sm sm:text-base">Subject</label>
          <input
            type="text"
            name="subject"
            defaultValue=""
            {...register("subject", {
              required: true,
            })}
            required
          />
          {errors.subject && (
            <p className="text-red-500 -mt-5">
              <small>Subject field is required</small>
            </p>
          )}

          <label className="text-sm sm:text-base">Username or Email</label>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            required
          />
          {errors.email && (
            <p className="text-red-500 -mt-5">
              <small>Email field is required</small>
            </p>
          )}

          <label className="text-sm sm:text-base">Your Phone number</label>
          <input
            type="text"
            {...register("phone", { required: true })}
            required
          />

          {errors.phone && (
            <p className="text-red-500 -mt-5">
              <small>This field is required</small>
            </p>
          )}

          <label className="text-sm sm:text-base">Your Address</label>
          <input
            type="text"
            defaultValue=""
            {...register("address", { required: true })}
            required
          />

          {errors.address && (
            <p className="text-red-500 -mt-5">
              <small>Address field is required</small>
            </p>
          )}

          <label className="text-sm sm:text-base">Your Date Of Birth</label>
          <input
            type="text"
            {...register("dateOfBirth", { required: true })}
            required
          />

          {errors.dateOfBirth && (
            <p className="text-red-500 -mt-5">
              <small>Date Of Birth field is required</small>
            </p>
          )}

          <label className="text-sm sm:text-base">Photo Url</label>
          <input
            type="url"
            defaultValue=""
            {...register("photoURL", { required: true })}
            required
          />

          {errors.photoURL && (
            <p className="text-red-500 -mt-5">
              <small>PhotoURL field is required</small>
            </p>
          )}

          <input
            type="submit"
            value="Submit"
            className="btn bg-pink-500 hover:bg-pink-600 border-none btn-block rounded-3xl"
          />
        </form>
      </div>
    </Container>
  );
};

export default Admission;

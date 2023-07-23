import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import "./Profile.css";
import { Link } from "react-router-dom";
import ProfileModal from "./ProfileModal";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user]);

  return (
    <div className="profile__card mx-auto text-center">
      <h1 className="primary-font text-3xl font-semibold">Users Information</h1>
      <div className="w-40 mx-auto mt-2">
        <img
          className="rounded-full w-40 h-40 avatar border-4"
          src={userData?.image}
          alt=""
        />
      </div>
      <h6 className="text-xl font-semibold mt-6">{userData?.name}</h6>
      <p className="mt-4">
        <span className="font-semibold">Email: </span>
        {userData?.email}
      </p>
      <p>
        <span className="font-semibold">Address: </span>
        {userData?.address}
      </p>
      <p>
        <span className="font-semibold">University: </span>
        {userData?.university}
      </p>
      <div className="text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-sm px-5 rounded-3xl text-white bg-[#A81C51]  hover:bg-[#A81C59] hover:border-none mt-4 uppercase"
        >
          update User
        </button>
      </div>
      <Link
        to="/"
        className="btn btn-sm px-5 hover:border-none mt-10 uppercase"
      >
        Back to homepage
      </Link>
      <ProfileModal
        userData={userData}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Profile;
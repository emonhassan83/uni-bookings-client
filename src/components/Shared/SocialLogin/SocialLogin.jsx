import { useContext, useState } from "react";
import googleLogo from "../../../assets/logo/google.png";
import { toast } from "react-hot-toast";

import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    setError("");
    googleSignIn()
      .then((result) => {
        const logUser = result.user;
        console.log(logUser);
        //save user in db
        

        toast.success("user logged in successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };
  return (
    <>
      <div
        onClick={handleGoogleSignIn}
        className="flex items-center social-login my-4"
      >
        <img className="w-8 h-8 ml-6" src={googleLogo} alt="" />
        <p className="mx-auto">Continue with Google</p>
      </div>
      {error && (
        <p className="text-center text-red-500 -mt-3">
          <small>{error}</small>
        </p>
      )}
    </>
  );
};

export default SocialLogin;

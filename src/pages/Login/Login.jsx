import { useForm } from "react-hook-form";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const { signIn, resetPassword } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    setError('')
    signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                icon: 'success',
                title: 'Yep...',
                text: 'User login successfully!',
              })
            navigate(from, {replace: true});
            navigate('/');
        })
        .catch(error => {
          setError(error.message);
          console.log(error)
        })
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error('Please provide  your email address to reset password');
      return;
    }
    resetPassword(email)
    .then( () => {
      toast.success('Please check your email');
    })
    .catch(error => {
      console.log(error);
      setError(error.message);
    })
  };

  return (
    <div className="mt-6 mb-12  login-card mx-auto">
      <Helmet>
        <title>Uni Bookings | Login</title>
      </Helmet>
      <h2 className="text-xl sm:text-2xl font-bold mb-8">Login Please</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="text-sm sm:text-base">Username or Email</label>
        <input
          type="email"
          name="email"
          ref={emailRef}
          {...register("email", { required: true })}
          required
        />
        {errors.email && (
          <p className="text-red-500 -mt-5">
            <small>Email field is required</small>
          </p>
        )}

        <label className="text-sm sm:text-base">Password</label>
        <input
          type={show ? "text" : "password" }
          name="password"
          {...register("password", {
            required: true,
            minLength: 6,
            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
          })}
          required
        />
        <p className="-mt-4" onClick={()=> setShow(!show)}><small> {show ? <span>Hide Password</span> : <span>Show Password</span> }</small></p>
        {errors.password?.type === "required" && (
          <p className="text-red-500 -mt-5">
            <small>Password is required</small>
          </p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-red-500 -mt-5">
            <small>Password must be 6 character</small>
          </p>
        )}
        {errors.password?.type === "pattern" && (
          <p className="text-red-500 -mt-5 ">
            <small>
              Password must have one Uppercase one lower case, one number and
              one special character
            </small>
          </p>
        )}

        <input
          type="submit"
          value="Login"
          className="btn bg-pink-500 hover:bg-pink-600 border-none btn-block rounded-3xl"
        />
        {error && <p className="text-red-500 font-bold -mt-3"><small>{error}</small></p>}
        <p>
        <small>
          Forget PassWord? Please{" "}
          <button onClick={handleResetPassword} className="btn btn-link text-xs text-pink-600 font-bold">
            Reset Password
          </button>
        </small>
      </p>
        <p>
          <small>
            New to UniBookings? Please{" "}
            <Link to="/signUp" className="text-pink-600 font-bold">
              Sign Up
            </Link>
          </small>
        </p>
      </form>
      <div className="divider mt-5">OR</div>
      <SocialLogin />
      <Toaster/>
    </div>
  );
};

export default Login;
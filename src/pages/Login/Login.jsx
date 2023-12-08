import React, { useState } from "react";
import bgTwo from "../../assets/bgTwo.jpg";
import google from "../../assets/google.png";
import { MdEmail } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
// TOSTIFY
import { ToastContainer, toast } from "react-toastify";
// FIREBASE AUTHENTICATION
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  // FIREBASE AUTHENTICATION
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  // NAVIGATE
  const navigate = useNavigate();
  // EMAIL
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  // PASSWORD
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // WRONG EMAIL OR PASSWORD
  const [error, setError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };

  const handleClick = () => {
    if (!email) {
      setEmailErr("⚠️   Email is required");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailErr("⚠️   Please enter a valid email address");
      }
    }
    if (!password) {
      setPasswordErr("⚠️   Password is required");
    }

    if (
      email &&
      password &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("Login successfully done");
          setEmail("");
          setPassword("");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          if (errorCode.includes("auth/invalid-credential")) {
            setError("⚠️   Password enter your right email and password");
          }
        });
    }
  };
  // GOOGLE SIGN IN
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Login successfully done");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };
  // FORGOT PASSWORD
  const handleForgotPassword = () =>{
    navigate('/forgot')
  }

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-no-repeat	bg-center"
      style={{ backgroundImage: `url(${bgTwo})` }}
    >
      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="w-[620px] bg-transparent text-white px-8 py-10 rounded-xl border-2 border-red-400 backdrop-blur-2xl">
        <form action="">
          <h1 className="text-[34px] text-yellow-50 text-center font-pops font-bold">
            Login to your account!
          </h1>
          <div
            onClick={handleGoogleSignIn}
            className="flex gap-4 p-5 mt-8 bg-red-400 rounded-lg w-fit cursor-pointer"
          >
            <img src={google} alt="google" />
            <p className="text-base text-yellow-50 font-semibold tracking-[1px] ">
              Login with Google
            </p>
          </div>
          {error && (
            <p className="font-pops text-xl text-yellow-200">{error}</p>
          )}
          {/* EMAIL INPUT */}
          <div className="relative flex items-center w-full h-[50px] my-[30px]">
            <input
              value={email}
              onChange={handleEmail}
              className="w-full h-full font-pops bg-transparent  outline-none border-2  border-red-400 rounded-full text-white text-2xl py-5 px-10"
              type="email"
              placeholder="Email"
            />
            <MdEmail className="absolute translate-x-2/4 right-9 text-xl" />
          </div>
          {/* EMAIL ERROR */}
          {emailErr && (
            <p className="font-pops text-base text-yellow-200">{emailErr}</p>
          )}
          {/* PASSWORD INPUT */}
          <div className="relative flex items-center w-full h-[50px] my-[30px]">
            <input
              value={password}
              onChange={handlePassword}
              className="w-full h-full font-pops bg-transparent  outline-none border-2  border-red-400 rounded-full text-white text-2xl py-55 px-10"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            {showPassword ? (
              <IoEye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute translate-x-2/4 right-9 text-xl"
              />
            ) : (
              <IoMdEyeOff
                onClick={() => setShowPassword(!showPassword)}
                className="absolute translate-x-2/4 right-9 text-xl"
              />
            )}
          </div>
          {/* PASSWORD ERROR */}
          {passwordErr && (
            <p className="font-pops text-base text-yellow-200">{passwordErr}</p>
          )}
          {/* REMEMBER AND FORGOT */}
          <div className="flex justify-between text-lg mt-6 mb-4">
            <label className="cursor-pointer font-pops">
              <input type="checkbox" />
              Remember me
            </label>
            <p
              onClick={handleForgotPassword}
              className="underline cursor-pointer font-pops text-lg"
            >
              Forgot password ?
            </p>
          </div>
          {/* LOGIN BUTTON */}
          <div
            onClick={handleClick}
            className="w-full py-2 bg-red-400 rounded-full text-center"
          >
            <p className="text-yellow-50 text-2xl font-pops font-semibold cursor-pointer">
              Login to Continue
            </p>
          </div>

          <div className="text-base text-center ">
            <p className="font-pops text-base mt-7">
              Don't have an account ?
              <span href="" className="text-amber-500 font-semibold font-pops">
                <Link to="/registration">Sign up</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

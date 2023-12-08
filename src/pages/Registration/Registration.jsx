import React, { useState } from "react";
import bgTwo from "../../assets/bgTwo.jpg";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

const Registration = () => {
  // EMAIL
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  //   FULL NAME
  const [fullName, setFullName] = useState("");
  const [fullNameErr, setFullNameErr] = useState("");
  // PASSWORD
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  const handleFullName = (e) => {
    setFullName(e.target.value);
    setFullNameErr("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };

  const handleClick = () => {
    if (!email) {
      setEmailErr("⚠️   Email is required");
    }else {
      console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    }
    if (!fullName) {
      setFullNameErr("⚠️   Fullname is required");
    }
    if (!password) {
      setPasswordErr("⚠️   Password is required");
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-no-repeat	bg-center"
      style={{ backgroundImage: `url(${bgTwo})` }}
    >
      <div className="w-[620px] bg-transparent text-white px-8 py-10 rounded-xl border-2 border-teal-300 backdrop-blur-xl">
        <form action="">
          <h1 className="text-4xl text-yellow-50 text-center font-pops font-bold">
            Get started with easily register
          </h1>

          {/* EMAIL INPUT */}
          <div className="relative flex items-center w-full h-[50px] my-[30px]">
            <input
              value={email}
              onChange={handleEmail}
              className="w-full h-full font-pops bg-transparent  outline-none border-2  border-teal-400 rounded-full text-white text-2xl py-5 px-10"
              type="email"
              placeholder="Email"
            />
            <MdEmail className="absolute translate-x-2/4 right-9 text-xl" />
          </div>
          {/* EMAIL ERROR*/}
          {emailErr && (
            <p className="font-pops text-base text-yellow-200">{emailErr}</p>
          )}

          {/* FULL NAME INPUT */}
          <div className="relative flex items-center w-full h-[50px] my-[30px]">
            <input
              value={fullName}
              onChange={handleFullName}
              className="w-full h-full font-pops bg-transparent  outline-none border-2  border-teal-400 rounded-full text-white text-2xl py-5 px-10"
              type="text"
              placeholder="Full Name"
            />
            <FaUser className="absolute translate-x-2/4 right-9 text-xl" />
          </div>
          {/* FULL NAME ERROR */}
          {fullNameErr && (
            <p className="font-pops text-base text-yellow-200">{fullNameErr}</p>
          )}

          {/* PASSWORD INPUT */}
          <div className="relative flex items-center w-full h-[50px] my-[30px]">
            <input
              value={password}
              onChange={handlePassword}
              className="w-full h-full font-pops bg-transparent  outline-none border-2  border-teal-400 rounded-full text-white text-2xl py-55 px-10"
              type={showPassword ? 'text' : 'password'}
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
          {/* SIGN IN BUTTON */}
          <div
            onClick={handleClick}
            className="w-full py-2 bg-teal-200 rounded-full text-center"
          >
            <p className="text-gray-800  text-2xl font-pops font-semibold cursor-pointer">
              Sign up
            </p>
          </div>

          <div className="text-base text-center ">
            <p className="font-pops text-base mt-7">
              Already have an account ?{" "}
              <span href="" className="text-amber-500 font-semibold font-pops">
                <Link to='/login'>Sign in</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;

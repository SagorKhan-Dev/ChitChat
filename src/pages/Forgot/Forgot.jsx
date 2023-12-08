import React, { useState } from "react";
import bgTwo from "../../assets/bgTwo.jpg";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
// FIREBASE AUTHENTICATON
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const Forgot = () => {
  // FIREBASE AUTHENTICATON
  const auth = getAuth();
  // NAVIGATE
  const navigate = useNavigate();
  // EMAIL
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  // EMAIL RECOVERY
  const [checkEmail, setCheckEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  const handleClick = () => {
    if (!email) {
      setEmailErr("⚠️   Email is required");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailErr("⚠️   Please enter a valid email address");
      }
    }
    if (email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
            setCheckEmail("Please check your email for password recovery");
          setEmail("");
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    }
  };
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-no-repeat	bg-center"
      style={{ backgroundImage: `url(${bgTwo})` }}
    >
        
      <div className="w-[620px] bg-transparent text-white px-8 py-10 rounded-xl border-2 border-red-400 backdrop-blur-2xl">
        <form action="">
          <h1 className="text-[34px] text-yellow-50 text-center font-pops font-bold">
            Forgot your password !
          </h1>
          {
            checkEmail &&
            <p className="mb-5 font-pops text-xl text-yellow-200">
              {checkEmail}
            </p>
        }
          {/* EMAIL INPUT */}
          <div className="relative flex items-center w-full h-[50px] my-[30px]">
            <input
              onChange={handleEmail}
              value={email}
              className="w-full h-full font-pops bg-transparent  outline-none border-2  border-red-400 rounded-full text-white text-2xl py-5 px-10"
              type="email"
              placeholder="Email"
            />
            <MdEmail className="absolute translate-x-2/4 right-9 text-xl" />
          </div>
          {emailErr && (
            <p className="mb-5 font-pops text-base text-yellow-200">
              {emailErr}
            </p>
          )}
          {/* BUTTONS */}
          <div className="flex justify-between">
            <div
              onClick={handleClick}
              className=" w-fit p-2 bg-red-400 rounded-xl text-center"
            >
              <p className="text-yellow-50 text-2xl font-pops font-semibold cursor-pointer">
                Submit
              </p>
            </div>
            <div className=" w-fit p-2 bg-red-400 rounded-xl text-center">
              <p className="text-yellow-50 text-2xl font-pops font-semibold cursor-pointer">
                <Link to="/login">Back to Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;

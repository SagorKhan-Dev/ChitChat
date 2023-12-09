import React, { useEffect, useState } from "react";
import bgTwo from "../../assets/bgTwo.jpg";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// FIREBASE AUTHENTICATION
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Sidebar from "../../components/Sidebar/Sidebar";
import GroupList from "../../components/GroupList/GroupList";
const Home = () => {
  // FIREBASE AUTHENTICATION
  const auth = getAuth();
  const navigate = useNavigate();
  const data = useSelector((state) => state.userLoginInfo.userInfo);
  console.log(data);
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    if (!data) {
      navigate("/login");
    }
  }, []);
  // STATE OBSERVER
  onAuthStateChanged(auth, (user) => {
    console.log(user, "lgoeghjojgeaggha");
    if (user.emailVerified) {
      setVerify(true);
    }
  });

  return (
    <div>
      {verify ? (
        <div className="flex">
          <div className="w-[186px]">
            <Sidebar />
          </div>
          <div className="w-[427px] ml-10">
            <GroupList />
          </div>
          <div className="w-[427px]">ofhweoth</div>
          <div className="w-[427px]">ofhweoth</div>
        </div>











      ) : (
        <div
          className="flex justify-center items-center min-h-screen bg-cover bg-no-repeat	bg-center"
          style={{ backgroundImage: `url(${bgTwo})` }}
        >
          <div className="w-[620px] bg-transparent text-white px-8 py-10 rounded-xl border-2 border-red-400 backdrop-blur-2xl">
            <h1 className="text-[34px] text-yellow-50 text-center font-pops font-bold">
              Please verify your Email
            </h1>
            <div className=" w-fit py-2 px-5 mt-8 bg-red-400 rounded-full mx-auto">
              <p className="text-yellow-50 text-2xl font-pops font-semibold cursor-pointer">
                <Link to='/login'>Back to Login</Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

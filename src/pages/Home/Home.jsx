import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// FIREBASE AUTHENTICATION
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
        <h1>Home</h1>
      ) : (
        <div>
          <p>Please verify your email</p>
        </div>
      )}
    </div>
  );
};

export default Home;

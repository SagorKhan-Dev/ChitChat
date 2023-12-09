import React from "react";
import sidebar from "../../assets/sidebar.png";
import { AiOutlineHome, AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsOutline, IoLogOutSharp } from "react-icons/io5";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return (
    <div className="bg-red-400 h-screen rounded-lg pt-9">
      <img src={sidebar} alt="sidebar" className="mx-auto" />
      <div className='relative mt-16 py-5 after:absolute after:content-[""] after:w-full after:h-full after:top-0 after:left-[25px] after:bg-white after:z-[-1] z-[1] overflow-hidden after:rounded-l-2xl before:absolute before:content-[""] before:top-0 before:right-0 before:bg-red-400 before:h-full before:w-3 before:rounded-l-2xl'>
        <AiOutlineHome className="mx-auto text-5xl text-teal-400" />
      </div>

      <div className="mt-16">
        <AiFillMessage className="mx-auto text-5xl text-teal-400" />
      </div>

      <div className="mt-16">
        <IoMdNotifications className="mx-auto text-5xl text-teal-400" />
      </div>

      <div className="mt-16">
        <IoSettingsOutline className="mx-auto text-5xl text-teal-400" />
      </div>

      <div className="mt-40">
        <IoLogOutSharp
          onClick={handleSignOut}
          className="mx-auto text-5xl text-teal-400"
        />
      </div>
    </div>
  );
};

export default Sidebar;

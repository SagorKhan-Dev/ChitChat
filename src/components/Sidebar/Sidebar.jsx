import React, { createRef, useState } from "react";
import sidebar from "../../assets/sidebar.png";
import { AiOutlineHome, AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { IoSettingsOutline, IoLogOutSharp } from "react-icons/io5";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { IoCloudUpload } from "react-icons/io5";
// REACT CROPPER
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const Sidebar = () => {

  const auth = getAuth();
  const navigate = useNavigate();
  const [imageUploadPopup, setImageUploadPopup] = useState(false);
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("");
  const cropperRef = createRef();

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

  const handleImageUpload = () => {
    setImageUploadPopup(true);
  };
  const handleImageCancelUploadPopup = () => {
    setImageUploadPopup(false);
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <div className="bg-red-400 h-screen rounded-lg pt-9">
      <div className="group relative w-[100px] h-[100px] mx-auto">
        <img src={sidebar} alt="sidebar" className="mx-auto" />
        <div
          onClick={handleImageUpload}
          className=" group-hover:opacity-100 absolute top-0 left-0 bg-overlay opacity-0 rounded-full w-full h-full mx-auto flex justify-center items-center cursor-pointer"
        >
          <IoCloudUpload className=" text-3xl text-white" />
        </div>
      </div>
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

      {imageUploadPopup && (
        <div className="h-screen w-full bg-red-300 absolute top-0 left-0 z-[1] flex justify-center items-center">
          <div className="bg-white w-2/5 p-10 rounded-lg">
            <h1 className="font-pops text-3xl font-bold ">Upload Your Image</h1>
            <div className="w-[100px] h-[100px] rounded-full mx-auto overflow-hidden my-3">
              <div className="img-preview w-[100px] h-[100px] rounded-full"></div>
            </div>
            {
              image &&
              <Cropper
              ref={cropperRef}
              style={{ height: 400, width: "100%" }}
              zoomTo={0.5}
              initialAspectRatio={1}
              preview=".img-preview"
              src={image}
              viewMode={1}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
              guides={true}
            />
            }
            <input type="file" className="my-10" onChange={handleImageChange}/>
            <div className="flex gap-10">
            <button className="bg-red-400 text-white px-7 py-3 text-lg font-medium text-x  rounded-lg">
              Upload
            </button>
            <button onClick={handleImageCancelUploadPopup} className="bg-red-400 text-white px-7 py-3 text-lg font-medium text-x  rounded-lg">
              Cancel
            </button>
            </div>
          </div>  
        </div>
      )}
    </div>
  );
};

export default Sidebar;

import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import group from "../../assets/group.png";

const GroupList = () => {
  return (
    <div className="shadow rounded-lg px-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-pops font-bold">Group List</h2>
        <BsThreeDotsVertical className="text-2xl text-red-400" />
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between border-b-2 border-red-400 pb-4">
          <img src={group} alt="group" />
          <div>
            <h2 className="font-pops text-lg font-semibold ">
              Friends Reunion
            </h2>
            <p className="font-pops text-sm font-medium">Hi Guys, Wassup!</p>
          </div>
          <div className="font-pops text-xl font-semibold rounded-md bg-red-400 px-6">
            <button>Join</button>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-b-2 border-red-400 pb-4">
          <img src={group} alt="group" />
          <div>
            <h2 className="font-pops text-lg font-semibold ">
              Friends Reunion
            </h2>
            <p className="font-pops text-sm font-medium">Hi Guys, Wassup!</p>
          </div>
          <div className="font-pops text-xl font-semibold rounded-md bg-red-400 px-6">
            <button>Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupList;

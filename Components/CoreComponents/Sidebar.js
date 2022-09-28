import React, { useState } from "react";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegBookmark, FaAngleDoubleRight, FaRegEdit } from "react-icons/fa";
import { IoMdClipboard } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi";
import authController from "../../Controllers/authController";
import { RiCoupon4Line } from "react-icons/ri";

const links = [
  { name: "Home", link: "/", icon: AiOutlineHome },
  { name: "All Blogs", link: "/blogs", icon: IoMdClipboard },
  { name: "My Blogs", link: "/my-blogs", icon: RiCoupon4Line },
  { name: "Saved", link: "/saved", icon: FaRegBookmark },
  { name: "Create Blog", link: "/create-blog", icon: FaRegEdit },
  { name: "Engineers", link: "/engineers", icon: HiOutlineUsers },
  { name: "Settings", link: "/setting", icon: FiSettings },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen fixed left-0 z-[900] top-0 hidden lg:block  bg-gray-900 px-4   transition-all duration-500 ease-in-out text-white ${
        open ? "w-[95px]" : "w-[230px]"
      }`}
    >
      <div
        className={`absolute md:block hidden  text-white text-[15px] cursor-pointer -right-2  top-5 w-[25px] h-[25px] bg-gray-900 rounded-full`}
        onClick={() => setOpen(!open)}
      >
        <FaAngleDoubleRight
          className={`transition-all duration-200 ease-in-out ${
            !open && "rotate-180"
          } transform absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
        />
      </div>
      <div className={`flex flex-col mt-14 relative gap-3`}>
        {links?.map((link, index) => (
          <NavLink
            to={`${link.link}`}
            key={index}
            onClick={() => setOpen(true)}
            className={`flex group items-center gap-3.5 p-3 pl-5 ${
              link?.gap && "mt-8"
            }  hover:bg-white hover:text-gray-900 hover:rounded-md text-white transition-all duration-150 ease-in-out`}
          >
            <div className="text-[22px]">{React.createElement(link?.icon)}</div>
            <h5
              className={`whitespace-pre  text-[17px] mb-0 duration-100 ease-in-out ${
                open && "opacity-0 "
              }`}
            >
              {link?.name}
            </h5>
          </NavLink>
        ))}
      </div>
      <button
        onClick={() => {
          authController.logout();
          setTimeout(() => {
            console.log("Navigating..........");
            navigate("/login");
          }, 1000);
        }}
        className={` flex group items-center gap-3.5 p-3 pl-5 cursor-pointer text-white transition-all duration-150 ease-in-out`}
      >
        <div className="text-[22px]">
          <FiLogOut />
        </div>
        <h5
          className={`whitespace-pre  text-[17px] mb-0 duration-100 ease-in-out ${
            open && "opacity-0 "
          }`}
        >
          Logout
        </h5>
      </button>
      <div className={`mt-10 flex items-center justify-center`}>
        <img
          src="https://images.pexels.com/photos/13174596/pexels-photo-13174596.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="profile"
          className="self-center object-cover w-12 h-12 rounded-full"
        />
      </div>
    </div>
  );
};

export default Sidebar;

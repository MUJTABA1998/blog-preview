import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";
import alertController from "../../Controllers/alertController";
import { motion } from "framer-motion";

const Alert = ({ message, show, type }) => {
  const close = () => {
    alertController.hide();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      alertController.hide();
    }, 2000);

    return () => clearTimeout(timeout);
  });

  return (
    <motion.div
      initial={{ translateX: "100%" }}
      animate={{ translateX: "0%" }}
      transition={{
        type: "spring",
        stiffness: 360,
        damping: 20,
      }}
      className={`${
        show
          ? "flex flex-col justify-center translate-x-[0%] z-50 top-0 right-0 md:right-10 md:top-5"
          : "right-0 translate-x-[100%] top-0 opacity-0 md:opacity-100  md:top-5"
      } absolute transform  ${type}   max-w-5xl drop-shadow-md  md:max-w-[300px] max-h-[70px] h-full  w-full transition-all duration-400 ease-in-out   text-white`}
    >
      <CgClose
        className={`text-[16px] ${
          show ? "block" : "hidden"
        } text-white absolute top-3 right-4 cursor-pointer`}
        onClick={() => close()}
      />
      <p className="m-0 text-[13px] tracking-wider text-white">{message}</p>
    </motion.div>
  );
};

export default Alert;

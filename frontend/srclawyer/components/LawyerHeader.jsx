import React from "react";
import { assets } from "../assets/assets";

const LawyerHeader = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* --------- Header Left --------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Expand Your Practice <br /> Join Our Trusted Platform
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Showcase your expertise, manage appointments, and connect <br className="hidden sm:block" />
            with clients seamlessly on our trusted platform.
          </p>
        </div>
        <a
          href="#features"
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Join Now{" "}
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* --------- Header Right --------- */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={assets.lawyer_header_img}
          alt="Lawyer Header Image"
        />
      </div>
    </div>
  );
};

export default LawyerHeader;

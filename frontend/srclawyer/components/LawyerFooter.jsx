import React from "react";
import { assets } from "../assets/lawyer_img.png";

const LawyerFooter = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="Courtify Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Join the trusted platform connecting lawyers with clients globally. 
            Expand your reach, manage cases efficiently, and showcase your expertise.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">FOR LAWYERS</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Dashboard</li>
            <li>Case Management</li>
            <li>Consultations</li>
            <li>Profile Settings</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">CONTACT SUPPORT</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>lawyer-support@courtify.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @ Courtify.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default LawyerFooter;

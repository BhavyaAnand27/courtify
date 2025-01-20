import React, { useState } from "react";
import { assets } from "../assets/assets";

const LawyerProfile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [lawyerData, setLawyerData] = useState({
    name: "Richard James",
    image: assets.profile_pic,
    email: "richardjames@gmail.com",
    phone: "+1  123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-01-20",
    specialization: "Criminal Law",  // New field for lawyer specialization
    experience: "10",  // New field for years of experience
    firmName: "James & Co. Law Firm",  // New field for law firm name
  });

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={lawyerData.image} alt="" />

      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          onChange={(e) =>
            setLawyerData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={lawyerData.name}
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {lawyerData.name}
        </p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{lawyerData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              onChange={(e) =>
                setLawyerData((prev) => ({ ...prev, phone: e.target.value }))
              }
              value={lawyerData.phone}
            />
          ) : (
            <p className="text-blue-400">{lawyerData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-50"
                type="text"
                onChange={(e) =>
                  setLawyerData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={lawyerData.address.line1}
              />
              <br />
              <input
                className="bg-gray-50"
                type="text"
                onChange={(e) =>
                  setLawyerData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={lawyerData.address.line2}
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {lawyerData.address.line1} <br /> {lawyerData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">PROFESSIONAL INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Specialization:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-60"
              type="text"
              onChange={(e) =>
                setLawyerData((prev) => ({
                  ...prev,
                  specialization: e.target.value,
                }))
              }
              value={lawyerData.specialization}
            />
          ) : (
            <p className="text-gray-400">{lawyerData.specialization}</p>
          )}
          <p className="font-medium">Years of Experience:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-20"
              type="number"
              onChange={(e) =>
                setLawyerData((prev) => ({
                  ...prev,
                  experience: e.target.value,
                }))
              }
              value={lawyerData.experience}
            />
          ) : (
            <p className="text-gray-400">{lawyerData.experience}</p>
          )}
          <p className="font-medium">Firm Name:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-60"
              type="text"
              onChange={(e) =>
                setLawyerData((prev) => ({
                  ...prev,
                  firmName: e.target.value,
                }))
              }
              value={lawyerData.firmName}
            />
          ) : (
            <p className="text-gray-400">{lawyerData.firmName}</p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setLawyerData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={lawyerData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{lawyerData.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-100"
              type="date"
              onChange={(e) =>
                setLawyerData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={lawyerData.dob}
            />
          ) : (
            <p className="text-gray-400">{lawyerData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
          >
            Save information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default LawyerProfile;

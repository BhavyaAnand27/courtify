import React, { useState } from "react";

const LawyerProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    specialization: "Criminal Law",
    bio: "Experienced lawyer with 10+ years in criminal cases.",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="profile">
      <h1>Lawyer Profile</h1>
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleInputChange}
        />
        <label>Specialization</label>
        <input
          type="text"
          name="specialization"
          value={profile.specialization}
          onChange={handleInputChange}
        />
        <label>Bio</label>
        <textarea
          name="bio"
          value={profile.bio}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default LawyerProfile;

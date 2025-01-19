// src/components/Lawyer/Profile.jsx
import React, { useState } from "react";

const Profile = () => {
    const [profile, setProfile] = useState({
        name: "John Doe",
        specialization: "Criminal Law",
        experience: 5,
    });

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Profile Updated", profile);
        // Make an API call to update the profile
    };

    return (
        <section className="profile">
            <h2>Update Your Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={profile.name} onChange={handleChange} />
                <label>Specialization:</label>
                <input type="text" name="specialization" value={profile.specialization} onChange={handleChange} />
                <label>Experience:</label>
                <input type="number" name="experience" value={profile.experience} onChange={handleChange} />
                <button type="submit">Save</button>
            </form>
        </section>
    );
};

export default Profile;

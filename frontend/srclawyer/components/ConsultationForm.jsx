import React, { useState } from "react";

const ConsultationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    clientName: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="consultation-form" onSubmit={handleSubmit}>
      <label>Client Name</label>
      <input
        type="text"
        name="clientName"
        value={formData.clientName}
        onChange={handleChange}
      />
      <label>Query</label>
      <textarea
        name="query"
        value={formData.query}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ConsultationForm;

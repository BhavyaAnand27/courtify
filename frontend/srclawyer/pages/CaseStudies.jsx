import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const CaseStudies = () => {
  const { token, backendUrl } = useContext(AppContext);
  const [caseStudies, setCaseStudies] = useState([]);
  const [newCaseStudy, setNewCaseStudy] = useState({
    title: "",
    description: "",
    file: null,
  });

  // Fetching existing case studies
  const getCaseStudies = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/lawyer/case-studies`, {
        headers: { token },
      });
      if (data.success) {
        setCaseStudies(data.caseStudies);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Handle case study file upload
  const handleFileChange = (e) => {
    setNewCaseStudy({ ...newCaseStudy, file: e.target.files[0] });
  };

  // Submit new case study
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newCaseStudy.title || !newCaseStudy.description || !newCaseStudy.file) {
      toast.error("Please fill all fields and upload a file");
      return;
    }

    const formData = new FormData();
    formData.append("title", newCaseStudy.title);
    formData.append("description", newCaseStudy.description);
    formData.append("file", newCaseStudy.file);

    try {
      const { data } = await axios.post(
        `${backendUrl}/api/lawyer/case-studies`,
        formData,
        {
          headers: { token, "Content-Type": "multipart/form-data" },
        }
      );

      if (data.success) {
        setNewCaseStudy({ title: "", description: "", file: null });
        getCaseStudies(); // Refresh case studies list
        toast.success("Case study added successfully");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Delete case study
  const handleDelete = async (caseStudyId) => {
    try {
      const { data } = await axios.delete(
        `${backendUrl}/api/lawyer/case-studies/${caseStudyId}`,
        {
          headers: { token },
        }
      );
      if (data.success) {
        setCaseStudies(caseStudies.filter((item) => item._id !== caseStudyId));
        toast.success("Case study deleted successfully");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getCaseStudies();
    }
  }, [token]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-semibold">Add and View Case Studies</h1>

      {/* Add New Case Study Form */}
      <form onSubmit={handleSubmit} className="border p-4 rounded-lg shadow-lg mt-6">
        <h2 className="text-xl font-semibold">Add New Case Study</h2>
        <div className="my-4">
          <label className="block">Title</label>
          <input
            type="text"
            className="border w-full p-2 mt-2"
            value={newCaseStudy.title}
            onChange={(e) => setNewCaseStudy({ ...newCaseStudy, title: e.target.value })}
            required
          />
        </div>
        <div className="my-4">
          <label className="block">Description</label>
          <textarea
            className="border w-full p-2 mt-2"
            value={newCaseStudy.description}
            onChange={(e) =>
              setNewCaseStudy({ ...newCaseStudy, description: e.target.value })
            }
            required
          />
        </div>
        <div className="my-4">
          <label className="block">Upload Case Study File</label>
          <input
            type="file"
            className="border p-2 mt-2"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt"
            required
          />
        </div>
        <button className="bg-primary text-white py-2 px-4 rounded-md">Add Case Study</button>
      </form>

      {/* Display List of Case Studies */}
      <div className="my-8">
        <h2 className="text-xl font-semibold">Your Case Studies</h2>
        {caseStudies.length === 0 ? (
          <p>No case studies found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {caseStudies.map((caseStudy) => (
              <div key={caseStudy._id} className="border p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold">{caseStudy.title}</h3>
                <p>{caseStudy.description}</p>
                <div className="flex justify-between mt-4">
                  <a
                    href={caseStudy.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    View File
                  </a>
                  <button
                    className="text-red-500"
                    onClick={() => handleDelete(caseStudy._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudies;

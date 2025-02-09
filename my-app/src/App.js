import React, { useState } from "react";
import axios from "axios";

function User_details() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    number: "",
    gender: "",
    age: "",
    city: "",
    state: "",
    height: "",
    weight: "",
    bmi: "",
    diabetes: "",
    foodAllergies: "",
    bloodPressure: "",
    cholesterolLevels: "",
    smokingHabit: "",
    alcoholConsumption: "",
    doctorsNotes: "",
    physicalActivity: "",
    currentMedications: "",
    medicalHistory: "",
    emergencyContact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://nourish-backend-h78c.onrender.com/register", formData);
      console.log("Data submitted successfully:", response.data);
      alert("User details submitted successfully!");
      window.location.href = "https://wa.me/+15551810144";
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit details. Please try again.");
    }
  };

  const inputOrder = [
    "fullName", "email", "password", "number", "gender", "age", 
    "city", "state", "height", "weight", "bmi", "diabetes", 
    "foodAllergies", "bloodPressure", "cholesterolLevels", 
    "smokingHabit", "alcoholConsumption", "physicalActivity", 
    "currentMedications", "doctorsNotes", "medicalHistory", "emergencyContact"
  ];

  return (
    <div className="flex justify-center items-center bg-black min-h-screen p-6">
      <form onSubmit={handleSubmit} className="bg-black shadow-lg rounded-lg p-8 w-full max-w-4xl border border-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">User Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inputOrder.map((key) => (
            key === "medicalHistory" || key === "emergencyContact" ? (
              <textarea
                key={key}
                name={key}
                placeholder={key.replace(/([A-Z])/g, " $1").trim()}
                value={formData[key]}
                onChange={handleChange}
                className="bg-transparent w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white col-span-1 md:col-span-2"
              ></textarea>
            ) : (
              <input
                key={key}
                type={
                  key === "doctorsNotes" ? "text" :
                  key === "email" ? "email" :
                  key === "password" ? "password" :
                  key === "number" || key === "age" || key === "height" || key === "weight" || key === "bmi" ? "number" : "text"
                }
                name={key}
                placeholder={key.replace(/([A-Z])/g, " $1").trim()}
                value={formData[key]}
                onChange={handleChange}
                className="bg-transparent w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
              />
            )
          ))}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-8 w-1/2 bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default User_details;
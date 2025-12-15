import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    mobile: "",
    gender: "",
    dob: "",
    email: "",
    password: "",
    isLoggedIn:false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save full user data
    localStorage.setItem("mockUser", JSON.stringify(formData));

    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Student Registration
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

          <input
            name="firstName"
            placeholder="First Name"
            required
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg col-span-1"
          />

          <input
            name="lastName"
            placeholder="Surname"
            required
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg col-span-1"
          />

          <input
            name="fatherName"
            placeholder="Father's Name"
            required
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg col-span-2"
          />

          <input
            name="mobile"
            placeholder="Mobile Number"
            type="tel"
            required
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg col-span-1"
          />

          <select
            name="gender"
            required
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg col-span-1"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            name="dob"
            type="date"
            required
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg col-span-2"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg col-span-2"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="border px-3 py-2 rounded-lg col-span-2"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg col-span-2 hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

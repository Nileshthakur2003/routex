import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterFleetManager = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    address: '',
    employeeId: '',
    department: '',
    managementExperience: '',
    certifications: '',
    emergencyContact: '',
    backgroundCheck: '',
    drugTest: '',
    references: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative">
        <button
          className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Link to='/fleetManagerLogin'> Go Back</Link>
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">Register Fleet Manager</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input 
                type="text" 
                name="fullName" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date of Birth</label>
              <input 
                type="date" 
                name="dateOfBirth" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input 
                type="tel" 
                name="phoneNumber" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input 
                type="email" 
                name="email" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Residential Address</label>
              <input 
                type="text" 
                name="address" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Employee ID</label>
              <input 
                type="text" 
                name="employeeId" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Department</label>
              <input 
                type="text" 
                name="department" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Management Experience</label>
              <textarea 
                name="managementExperience" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                onChange={handleChange} 
                required 
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Certifications</label>
              <textarea 
                name="certifications" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                onChange={handleChange} 
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Emergency Contact</label>
              <input 
                type="text" 
                name="emergencyContact" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Background Check</label>
              <input 
                type="text" 
                name="backgroundCheck" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Drug and Alcohol Test</label>
              <input 
                type="text" 
                name="drugTest" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">References</label>
              <textarea 
                name="references" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
                onChange={handleChange} 
              ></textarea>
            </div>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterFleetManager;

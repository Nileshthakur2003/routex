import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterDriver = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    address: '',
    licenseNumber: '',
    licenseState: '',
    ssn: '',
    employmentHistory: '',
    drivingRecord: '',
    medicalCertificate: '',
    medicalConditions: '',
    trainingCertifications: '',
    backgroundCheck: '',
    drugTest: '',
    references: '',
    proofOfAddress: '',
    emergencyContact: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleGoBack = () => {
    // Handle go back action
    console.log('Go back clicked');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative">
        <button
          className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        ><Link to='/driverLogin'> Go Back</Link>
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">Register Driver</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input type="text" name="fullName" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date of Birth</label>
              <input type="date" name="dateOfBirth" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input type="tel" name="phoneNumber" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Residential Address</label>
              <input type="text" name="address" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">License Number</label>
              <input type="text" name="licenseNumber" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">License State</label>
              <input type="text" name="licenseState" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Social Security Number</label>
              <input type="text" name="ssn" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Employment History</label>
              <textarea name="employmentHistory" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Driving Record</label>
              <textarea name="drivingRecord" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Medical Examiner's Certificate</label>
              <input type="text" name="medicalCertificate" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Medical Conditions</label>
              <textarea name="medicalConditions" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Training and Certifications</label>
              <textarea name="trainingCertifications" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Background Check</label>
              <input type="text" name="backgroundCheck" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Drug and Alcohol Test</label>
              <input type="text" name="drugTest" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">References</label>
              <textarea name="references" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Proof of Address</label>
              <input type="text" name="proofOfAddress" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Emergency Contact</label>
              <input type="text" name="emergencyContact" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterDriver;

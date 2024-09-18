import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterHeadOffice = () => {
  const [formData, setFormData] = useState({
    officeName: '',
    address: '',
    contactNumber: '',
    email: '',
    postmasterName: '',
    postmasterContact: '',
    adminStaff: '',
    operatingHours: '',
    numberOfEmployees: '',
    numberOfVehicles: '',
    vehicleTypes: '',
    vehicleCapacity: '',
    servicesOffered: '',
    serviceAreas: '',
    dailyVolume: '',
    specialHandling: '',
    securityMeasures: '',
    compliance: '',
    insuranceDetails: '',
    itSystems: '',
    onlineServices: '',
    infrastructure: '',
    budget: '',
    serviceCost: '',
    paymentMethods: '',
    emergencyContact: '',
    contingencyPlans: ''
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
        <Link to="/dop3pllogin"
          className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Go Back
        </Link>
        <h2 className="text-2xl font-bold mb-6 text-center">Register Head Post Office</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Form fields */}
            <div className="mb-4">
              <label className="block text-gray-700">Office Name</label>
              <input type="text" name="officeName" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input type="text" name="address" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Contact Number</label>
              <input type="tel" name="contactNumber" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Postmaster General Name</label>
              <input type="text" name="postmasterName" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Postmaster General Contact</label>
              <input type="tel" name="postmasterContact" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Key Administrative Staff</label>
              <textarea name="adminStaff" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Operating Hours</label>
              <input type="text" name="operatingHours" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Number of Employees</label>
              <input type="number" name="numberOfEmployees" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Number of Vehicles</label>
              <input type="number" name="numberOfVehicles" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Types of Vehicles</label>
              <input type="text" name="vehicleTypes" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Capacity of Each Vehicle</label>
              <input type="text" name="vehicleCapacity" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Types of Services Offered</label>
              <textarea name="servicesOffered" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Service Areas Covered</label>
              <textarea name="serviceAreas" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Average Daily Volume of Parcels and Posts</label>
              <input type="number" name="dailyVolume" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Special Handling Requirements</label>
              <textarea name="specialHandling" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Security Measures</label>
              <textarea name="securityMeasures" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Compliance with Postal Regulations</label>
              <textarea name="compliance" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Insurance Details</label>
              <textarea name="insuranceDetails" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">IT Systems Used</label>
              <textarea name="itSystems" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Availability of Online Services</label>
              <textarea name="onlineServices" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Infrastructure Details</label>
              <textarea name="infrastructure" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Budget</label>
              <input type="text" name="budget" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Service Cost</label>
              <input type="text" name="serviceCost" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Payment Methods</label>
              <textarea name="paymentMethods" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange}></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Emergency Contact</label>
              <input type="tel" name="emergencyContact" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Contingency Plans</label>
              <textarea name="contingencyPlans" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange}></textarea>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterHeadOffice;

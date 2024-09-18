import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register3PL = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    contactNumber: '',
    email: '',
    managerName: '',
    managerContact: '',
    warehouseLocations: '',
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
        <h2 className="text-2xl font-bold mb-6 text-center">Register 3PL Company</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Form Fields */}
            {Object.entries({
              companyName: 'Company Name',
              address: 'Address',
              contactNumber: 'Contact Number',
              email: 'Email',
              managerName: 'Manager Name',
              managerContact: 'Manager Contact',
              warehouseLocations: 'Warehouse Locations',
              numberOfEmployees: 'Number of Employees',
              numberOfVehicles: 'Number of Vehicles',
              vehicleTypes: 'Vehicle Types',
              vehicleCapacity: 'Vehicle Capacity',
              servicesOffered: 'Services Offered',
              serviceAreas: 'Service Areas',
              dailyVolume: 'Daily Volume',
              specialHandling: 'Special Handling',
              securityMeasures: 'Security Measures',
              compliance: 'Compliance',
              insuranceDetails: 'Insurance Details',
              itSystems: 'IT Systems',
              onlineServices: 'Online Services',
              infrastructure: 'Infrastructure',
              budget: 'Budget',
              serviceCost: 'Service Cost',
              paymentMethods: 'Payment Methods',
              emergencyContact: 'Emergency Contact',
              contingencyPlans: 'Contingency Plans'
            }).map(([name, label]) => (
              <div className="mb-4" key={name}>
                <label className="block text-gray-700">{label}</label>
                {['warehouseLocations', 'servicesOffered', 'serviceAreas', 'specialHandling', 'securityMeasures', 'compliance', 'insuranceDetails', 'itSystems', 'onlineServices', 'infrastructure', 'contingencyPlans'].includes(name) ? (
                  <textarea
                    name={name}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    onChange={handleChange}
                  ></textarea>
                ) : (
                  <input
                    type={name === 'email' ? 'email' : name === 'contactNumber' || name === 'managerContact' ? 'tel' : name === 'numberOfEmployees' || name === 'numberOfVehicles' ? 'number' : 'text'}
                    name={name}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}
            <div className="mb-4">
              <label className="block text-gray-700">Service Cost</label>
              <input type="text" name="serviceCost" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Payment Methods</label>
              <input type="text" name="paymentMethods" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} />
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
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register3PL;

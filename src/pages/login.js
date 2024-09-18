import React from 'react';
import CustomDropdown from './dropdownLoginOptions';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <div className='mx-28'>
        <CustomDropdown />
        </div>
        <h3 className='text-2xl font-bold mb-6 text-center'>Department Of Post | 3PL Partner Login</h3>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Auth Code</label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div className="flex items-center justify-between mb-4">
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
            <a href="./registerDOP" className="text-sm text-blue-600 hover:underline">Register DoP</a>
            <a href="./register3PL" className="text-sm text-blue-600 hover:underline">Register 3PL</a>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

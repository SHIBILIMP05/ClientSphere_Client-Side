import React, { useState } from 'react';
import { adminCreateEmploye } from '../../services/apis/adminApi';
import { Bounce, toast } from 'react-toastify';

const EmployeeForm: React.FC = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();
    console.log({ name, position, email });
    try {

      const status = adminCreateEmploye({ name, position, email })
      status.then((res) => {
        if (res.employeeDetails.status === 200) {
          console.log('logedin==>', res.employeeDetails);
          toast.success(res.employeeDetails.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          })

        } else {
          toast.error(res.employeeDetails.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          })
        }
      })

    } catch (error) {
      console.error('Error creating employee:', error);
      toast.error('Failed to create employee.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Employee name</label>
        <input
          type="text"
          placeholder="Enter your Employee name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Position</label>
        <select
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        >
          <option value="">Select</option>
          <option value="Head">Head</option>
          <option value="Sales">Employee</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>

      <button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg">
        Create
      </button>
    </form>
  );
};

export default EmployeeForm;

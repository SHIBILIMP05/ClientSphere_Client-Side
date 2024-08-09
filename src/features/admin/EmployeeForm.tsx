import React, { useState } from 'react';
import { adminCreateEmploye } from '../../services/apis/adminApi';

const EmployeeForm: React.FC = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    
    e.preventDefault();
    console.log({ name, position, email });
    const status = adminCreateEmploye({ name, position, email })
    status.then((res)=>{
      if(res){
        
      }
    })


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
          <option value="Manager">Head</option>
          <option value="Developer">Employee</option>
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

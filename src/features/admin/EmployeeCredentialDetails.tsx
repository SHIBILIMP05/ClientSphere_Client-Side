import React, { useState } from 'react';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import { Bounce, toast } from 'react-toastify';

interface EmployeeCredentialDetailsProps {
  employeeId: string;
  employeePassword: string;
}

const EmployeeCredentialDetails: React.FC<EmployeeCredentialDetailsProps> = ({ employeeId, employeePassword }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied to clipboard", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Employee Credential Details</h2>
      
      <div className="mb-4 relative">
        <label className="block text-sm font-medium text-gray-700">Employee ID</label>
        <input
          type="text"
          value={employeeId}
          readOnly
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
        />
        <button 
          onClick={() => copyToClipboard(employeeId)} 
          className="absolute pt-6 right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          <FileCopyRoundedIcon />
        </button>
      </div>

      <div className="mb-4 relative">
        <label className="block text-sm font-medium text-gray-700">Employee Password</label>
        <input
          type="password" // Show dots
          value={employeePassword}
          readOnly
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
        />
        <button 
          onClick={() => copyToClipboard(employeePassword)} 
          className="absolute pt-6  right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          <FileCopyRoundedIcon />
        </button>
      </div>

      <p className="text-gray-600 text-sm mt-4">
        These employee credentials have been automatically sent to the employee's registered email address.
      </p>
    </div>
  );
};

export default EmployeeCredentialDetails;

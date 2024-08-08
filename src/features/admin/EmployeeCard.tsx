import React from 'react';

interface EmployeeCardProps {
  name: string;
  phone: string;
  email: string;
  imageUrl: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ name, phone, email, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center">
      <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full mb-4 object-cover" />
      <div className="font-bold text-lg">{name}</div>
      <div className="text-sm text-gray-500">{phone}</div>
      <div className="text-sm text-gray-500">{email}</div>
      <button className="mt-4 bg-orange-400 hover:bg-orange-500 text-white py-1 px-4 rounded-full transition-colors duration-300 ease-in-out">
        Restrict Action
      </button>
    </div>
  );
};

export default EmployeeCard;

import React from 'react';

const EmployeeStatus = () => {
  const employees = [
    { name: 'Lily', status: 'Online' },
    { name: 'Jason Price', status: 'Offline' },
    { name: 'Howard Adkins', status: 'Online' },
  ];

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Employees</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index} className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-2">
              <img src="/path-to-employee-image" alt={employee.name} className="w-8 h-8 rounded-full" />
              <span>{employee.name}</span>
            </div>
            <span className={employee.status === 'Online' ? 'text-green-500' : 'text-red-500'}>{employee.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeStatus;

import React from 'react';

const NewSalesTable = () => {
  const sales = [
    { id: '00001', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '14 Feb 2019', type: 'Electric', status: 'Completed' },
    // More sales data...
  ];

  return (
    <div className="bg-white p-6 rounded-md shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">New Sales</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left p-2">ID</th>
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Address</th>
            <th className="text-left p-2">Date</th>
            <th className="text-left p-2">Type</th>
            <th className="text-left p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td className="p-2">{sale.id}</td>
              <td className="p-2">{sale.name}</td>
              <td className="p-2">{sale.address}</td>
              <td className="p-2">{sale.date}</td>
              <td className="p-2">{sale.type}</td>
              <td className={`p-2 ${sale.status === 'Completed' ? 'text-green-500' : sale.status === 'Processing' ? 'text-yellow-500' : 'text-red-500'}`}>{sale.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewSalesTable;

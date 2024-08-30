
interface EmployeeCredentialDetailsProps {
  employeeId: string;
  employeePassword: string;
}

const EmployeeCredentialDetails: React.FC<EmployeeCredentialDetailsProps> = ({ employeeId, employeePassword }) => {

 

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

      </div>

      <div className="mb-4 relative">
        <label className="block text-sm font-medium text-gray-700">Employee Password</label>
        <input
          type="password"
          value={employeePassword}
          readOnly
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
        />

      </div>

      <p className="text-gray-600 text-sm mt-4">
        These employee credentials have been automatically sent to the employee's registered email address.
      </p>
    </div>
  );
};

export default EmployeeCredentialDetails;

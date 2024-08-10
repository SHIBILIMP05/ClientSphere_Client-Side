import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { adminCreateEmploye } from '../../services/apis/adminApi';
import { Bounce, toast } from 'react-toastify';
import Modal from '../../components/Modal';
import EmployeeCredentialDetails from './EmployeeCredentialDetails';

interface EmployeeFormProps {
  closeModal_1: () => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ closeModal_1 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [employeId, setEmployeId] = useState('');
  const [employePassword, setEmployePassword] = useState('');

  const closeModal = () => {
    setIsOpen(false);
    closeModal_1();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Employee name is required")
      .trim("Name cannot contain leading or trailing spaces")
      .matches(/^\S.*$/, "Name cannot start with a space"),
    position: Yup.string()
      .required("Position is required")
      .oneOf(["Head", "Employee"], "Invalid position selected"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required")
      .trim("Email cannot contain leading or trailing spaces")
      .matches(/^\S.*$/, "Email cannot start with a space"),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      position: '',
      email: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const status = adminCreateEmploye(values);
        status.then((res) => {
          if (res.employeeDetails.status === 200) {
            setEmployeId(res.employeeDetails.employeId);
            setEmployePassword(res.employeeDetails.employePassword);
            toast.success(res.employeeDetails.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
            setIsOpen(true);
          } else {
            toast.error(res.employeeDetails.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
          }
        });
      } catch (error) {
        console.error('Error creating employee:', error);
        toast.error('Failed to create employee.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Employee name</label>
          <input
            type="text"
            placeholder="Enter your Employee name"
            {...formik.getFieldProps('name')}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Position</label>
          <select
            {...formik.getFieldProps('position')}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select</option>
            <option value="Head">Head</option>
            <option value="Employee">Employee</option>
          </select>
          {formik.touched.position && formik.errors.position ? (
            <div className="text-red-500 text-sm">{formik.errors.position}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Email"
            {...formik.getFieldProps('email')}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>

        <button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg">
          Create
        </button>
      </form>

      <Modal isOpen={isOpen} onClose={closeModal} title="">
        <EmployeeCredentialDetails employeeId={employeId} employeePassword={employePassword} />
      </Modal>
    </>
  );
};

export default EmployeeForm;

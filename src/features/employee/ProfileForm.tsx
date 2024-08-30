import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ProfileDetails } from '../../interfaces/AdminProfileInterfaces';
import { employeDetails } from '../../store/slice/employeeSlice';
import { editProfile } from '../../services/apis/employeeApi';
import { Bounce, toast } from 'react-toastify';

interface Props {
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileForm = (props: Props) => {
    const employe = useSelector((state: RootState) => state.Employe);
    const dispatch = useDispatch()
    // Define the validation schema using Yup
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Full Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be exactly 10 digits').required('Phone number is required'),
        country: Yup.string().required('Country is required'),
        address: Yup.string().required('Address is required'),
        city: Yup.string().required('City is required'),
        pinCode: Yup.string().required('Pin Code is required'),
    });

    // Initial form values
    const initialValues = {
        name: employe.name || '',
        email: employe.email || '',
        phone: employe.phone || '',
        country: employe.country || '',
        address: employe.address || '',
        city: employe.city || '',
        pinCode: employe.pinCode || '',
    };

    const handleSubmit = (values: ProfileDetails) => {
        try {
            const status = editProfile(values, employe.id)
            status.then((data) => {
                console.log("data-updated===>", data);


                if (data.editProfileResponse.status === 200) {
                    dispatch(employeDetails({
                        id: data.editProfileResponse.data._id,
                        name: data.editProfileResponse.data.name,
                        email: data.editProfileResponse.data.email,
                        image: data.editProfileResponse.data.image,
                        phone: data.editProfileResponse.data.phone,
                        country: data.editProfileResponse.data.country,
                        address: data.editProfileResponse.data.address,
                        city: data.editProfileResponse.data.city,
                        pinCode: data.editProfileResponse.data.pinCode,

                    }))
                    toast.success(data.editProfileResponse.message, {
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
            })
        } catch (error) {
            console.error("Failed to update profile:", error);

        }

    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ setFieldValue }) => (
                <Form className="bg-white mt-3 p-6 rounded-md shadow-md">
                    {/* form section */}
                    <div className="flex items-center space-x-6 mb-8 relative">
                        <div className="flex  relative">
                            {employe.image ? (
                                <img
                                    src={employe.image}
                                    alt="Profile"
                                    className="w-20 h-20 rounded-full object-cover relative border-[#6735CC] border-4"
                                />
                            ) : (
                                <img
                                    src={`https://ui-avatars.com/api/?name=${employe.name}`}
                                    alt="Profile"
                                    className="w-20 h-20 rounded-full object-cover relative border-[#6735CC] border-4"
                                />
                            )}
                            <input
                                id="profile"
                                type="file"
                                name="image"
                                className="hidden"
                                accept="image/*"
                                onChange={(event) => {
                                    const file = event.currentTarget.files && event.currentTarget.files[0];
                                    if (file) {
                                        console.log("image===>", file);
                                        setFieldValue('image', file);
                                    }
                                }}
                            />
                            <label
                                htmlFor="profile"
                                className="cursor-pointer absolute inset-0 flex items-center justify-center hover:transition-colors hover:ease-in-out duration-300 hover:bg-gray-500 hover:bg-opacity-50 bg-black bg-opacity-50 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="text-white/70 w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                                    />
                                </svg>
                            </label>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold">{employe.name}</h2>
                            <p className="text-gray-600">Employe</p>
                        </div>
                        <div onClick={() => props.setIsEdit(false)} className=" text-right absolute right-3 ">
                            <CloseRoundedIcon fontSize="medium" />
                        </div>
                    </div>

                    {/* Profile Info Form */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700">Full Name</label>
                            <Field
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="mt-2 p-3 w-full bg-[#F9F9F9] rounded-lg border border-[#ECECF1] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="mt-2 p-3 w-full bg-[#F9F9F9] rounded-lg border border-[#ECECF1] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Phone</label>
                            <Field
                                type="text"
                                name="phone"
                                placeholder="Your Phone Number"
                                className="mt-2 p-3 w-full bg-[#F9F9F9] rounded-lg border border-[#ECECF1] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Country</label>
                            <Field
                                as="select"
                                name="country"
                                className="mt-2 p-3 w-full bg-[#F9F9F9] rounded-lg border border-[#ECECF1] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="">Select Your Country</option>
                                <option value='India'>India</option>
                                {/* Add more options as needed */}
                            </Field>
                            <ErrorMessage name="country" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Address</label>
                            <Field
                                type="text"
                                name="address"
                                placeholder="Your Address"
                                className="mt-2 p-3 w-full bg-[#F9F9F9] rounded-lg border border-[#ECECF1] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div>
                            <label className="block text-gray-700">City</label>
                            <Field
                                type="text"
                                name="city"
                                placeholder="Your City"
                                className="mt-2 p-3 w-full bg-[#F9F9F9] rounded-lg border border-[#ECECF1] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Pin Code</label>
                            <Field
                                type="text"
                                name="pinCode"
                                placeholder="Enter Your Pin code"
                                className="mt-2 p-3 w-full bg-[#F9F9F9] rounded-lg border border-[#ECECF1] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <ErrorMessage name="pinCode" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                    </div>

                    {/* Edit Button */}
                    <div className="mt-4 text-right">
                        <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none">
                            Submit
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ProfileForm;

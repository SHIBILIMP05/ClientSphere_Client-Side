import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { submitLeadsData } from "../../services/apis/adminApi";
import { Bounce, toast, ToastContainer } from "react-toastify";
import BasicModal from "./Modal";
import { useState } from "react";

const LeadForm = () => {

  const [isOpen,setIsOpen] = useState(false)


  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    company: Yup.string(),
    leadSource: Yup.string(),
    message: Yup.string(),
  });

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce} // Corrected syntax
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-4 space-y-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Enter Lead Details
          </h2>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              company: "",
              leadSource: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {

              console.log("form-values=>", values);
              const status = submitLeadsData(values)
              status.then((data) => {
                console.log("......", data.response.status);
                if (data.response.status == 200) {
                  toast.success(data.response.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                  })
                  setIsOpen(true)
                } else {
                  toast.error(data.response.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                  })
                }

                setSubmitting(false);
                resetForm()
                
              })
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Field type="text" name="name"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Field type="email" name="email" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <Field type="tel" name="phone" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <Field type="text" name="company" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <ErrorMessage name="company" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Lead Source */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    How Did You Hear About Us?
                  </label>
                  <Field type="text" name="leadSource" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g., Google, Social Media, Referral" />
                  <ErrorMessage name="leadSource" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Additional Info */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Additional Info
                  </label>
                  <Field as="textarea" name="message" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" rows="4" placeholder="Any additional information" />
                  <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Submit Button */}
                <button type="submit" disabled={isSubmitting}
                  className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {isOpen?<BasicModal isOpen={isOpen} setIsOpen={setIsOpen}/>:''}
    </>
  );
};

export default LeadForm;

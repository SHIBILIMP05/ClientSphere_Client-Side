import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, Button, Grid, Typography, MenuItem } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { LeadData } from '../../interfaces/LeadsInterfaces';
import { fetchLeadInfo, updateLeadInfo } from '../../services/apis/employeeApi';
import { Bounce, toast } from 'react-toastify';

interface Props {
  handleEditPopup: React.Dispatch<React.SetStateAction<boolean>>;
  leadId: string
  editOpen: boolean;
}

const EditLeadDetails = ({ editOpen, handleEditPopup, leadId }: Props) => {
  const employe = useSelector((state: RootState) => state.Employe)
  const [leadInfo, setLeadInfo] = useState<LeadData>()

  useEffect(() => {
    const status = fetchLeadInfo(leadId, employe.id)
    status.then((data) => {
      console.log("[[[[[", data.response);

      setLeadInfo(data.response.leadInfo as LeadData)

    })
  }, [])


  const validationSchema = Yup.object({
    name: Yup.string(),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    company: Yup.string(),
    leadSource: Yup.string(),
    country: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    pinCode: Yup.string(),
    lead_status: Yup.string().required('Lead Status is required'),
  });

  return (
    <>
      <Dialog
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(0.8px)',
            },
          },
        }}
        open={editOpen}
        onClose={handleEditPopup}
        maxWidth="md"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: 16,
            maxWidth: '64rem',
          },
        }}
      >
        <DialogTitle>
          <Typography variant="h6" component="div">
            Edit Lead Info
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Formik
            enableReinitialize
            initialValues={{
              name: leadInfo?.name,
              phone: leadInfo?.phone,
              email: leadInfo?.email,
              company: leadInfo?.company,
              leadSource: leadInfo?.leadSource,
              country: leadInfo?.country,
              city: leadInfo?.city,
              state: leadInfo?.state,
              pinCode: leadInfo?.pinCode,
              lead_status: leadInfo?.lead_status,
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log("values", values);
              const status = updateLeadInfo(employe.id, values as LeadData, leadInfo?._id as string)
              status.then((data) => {
                console.log("helooo", data);
                if (data.response.status === 200) {
                  setLeadInfo(data.response.leadInfo as LeadData)
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
              })

            }}
          >
            {({ isSubmitting, handleChange, values }) => (
              <Form>
                <Grid container spacing={3}>
                 
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Lead Details
                    </Typography>
                    <Field
                      name="name"
                      as={TextField}
                      label="Lead Name"
                      fullWidth
                      variant="standard"
                      color="secondary"
                      size="small"
                      margin="normal"
                      helperText={<ErrorMessage name="name" />}
                      error={Boolean(values.name && !values.name)}
                    />
                    <Field
                      name="phone"
                      as={TextField}
                      label="Phone"
                      fullWidth
                      variant="standard"
                      color="secondary"
                      size="small"
                      margin="normal"
                      helperText={<ErrorMessage name="phone" />}
                      error={Boolean(values.phone && !values.phone)}
                    />
                    <Field
                      name="email"
                      as={TextField}
                      label="Email"
                      fullWidth
                      variant="standard"
                      color="secondary"
                      size="small"
                      margin="normal"
                      helperText={<ErrorMessage name="email" />}
                      error={Boolean(values.email && !values.email)}
                    />
                    <Field
                      name="company"
                      as={TextField}
                      label="Company"
                      fullWidth
                      variant="standard"
                      color="secondary"
                      size="small"
                      margin="normal"
                      helperText={<ErrorMessage name="company" />}
                      error={Boolean(values.company && !values.company)}
                    />
                    <Field
                      name="leadSource"
                      as={TextField}
                      label="Lead Source"
                      fullWidth
                      variant="standard"
                      color="secondary"
                      size="small"
                      margin="normal"
                      helperText={<ErrorMessage name="leadSource" />}
                      error={Boolean(values.leadSource && !values.leadSource)}
                    />
                    <Field
                      name="lead_status"
                      as={TextField}
                      label="Lead Status"
                      select
                      fullWidth
                      variant="standard"
                      color="secondary"
                      size="small"
                      margin="normal"
                      value={values.lead_status}
                      onChange={handleChange}
                      helperText={<ErrorMessage name="lead_status" />}
                      error={Boolean(values.lead_status && !values.lead_status)}
                    >
                      <MenuItem value="New Lead">New Lead</MenuItem>
                      <MenuItem value="Call Not Connected">Call Not Connected</MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                      <MenuItem value="Rejected">Rejected</MenuItem>
                      <MenuItem value="Interested">Interested</MenuItem>
                      <MenuItem value="Not Interested">Not Interested</MenuItem>
                      <MenuItem value="Wants to do Payment">Wants to do Payment</MenuItem>
                      <MenuItem value="Customer">Customer</MenuItem>
                    </Field>
                  </Grid>


                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Lead Address Details
                    </Typography>
                    <Field
                      name="country"
                      as={TextField}
                      label="Country"
                      fullWidth
                      variant="standard"
                      color="secondary"
                      size="small"
                      margin="normal"
                      helperText={<ErrorMessage name="country" />}
                      error={Boolean(values.country && !values.country)}
                    />
                    <Field
                      name="city"
                      as={TextField}
                      label="City"
                      fullWidth
                      variant="standard"
                      color="secondary"
                      size="small"
                      margin="normal"
                      helperText={<ErrorMessage name="city" />}
                      error={Boolean(values.city && !values.city)}
                    />
                    <Field
                      name="state"
                      as={TextField}
                      label="State"
                      fullWidth
                      variant="standard"
                      color="secondary"
                      size="small"
                      margin="normal"
                      helperText={<ErrorMessage name="state" />}
                      error={Boolean(values.state && !values.state)}
                    />
                    <Field
                      name="pinCode"
                      as={TextField}
                      label="Zip Code"
                      fullWidth
                      variant="standard"
                      color="secondary"
                      size="small"
                      margin="normal"
                      helperText={<ErrorMessage name="pinCode" />}
                      error={Boolean(values.pinCode && !values.pinCode)}
                    />
                  </Grid>

                  <Grid item xs={12}>

                    <Button type="submit"
                      variant="contained"
                      color="secondary"
                      fullWidth
                      disabled={isSubmitting}
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
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditLeadDetails;

import { Button, Typography, Grid, Chip } from "@mui/material"
import EditNoteIcon from '@mui/icons-material/EditNote';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import { fetchLeadInfo } from "../../services/apis/employeeApi";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { LeadData } from "../../interfaces/LeadsInterfaces";
import { useNavigate, useParams } from "react-router-dom";
import EditLeadDetails from "./EditLeadDetails";



const LeadDetails = () => {

    const [leadInfo, setLeadInfo] = useState<LeadData>()
    const [editOpen, setEditOpen] = useState<boolean>(false)

    const { leadId } = useParams()
    const navigate = useNavigate()
    const employe = useSelector((state: RootState) => state.Employe)

    useEffect(() => {
        const status = fetchLeadInfo(leadId, employe.id)
        status.then((data) => {
            setLeadInfo(data.response.leadInfo)
        })
    }, [])

    /* handle edit popup */
    const handleEditPopup = () => {
        setEditOpen(!editOpen)
    }
    return (
        <>
            <div className="bg-white mt-3 rounded-md shadow-md">
                <div className="flex justify-between items-center p-3 border-b ">
                    <div className="flex">
                        <Button onClick={() => navigate('/employee/leads/')} className="text-gray-700 hover:text-gray-600  ">
                            <ArrowBackIcon color="action" />
                        </Button>
                        <Typography variant="h5" component="div" className="text-2xl font-semibold">
                            Leads Details
                        </Typography>
                    </div>
                    <div className='space-x-1'>

                        <Button className="text-gray-700 hover:text-gray-600 min-w-0 p-0">
                            <PhoneIcon fontSize='medium' color='success' />
                        </Button>
                        <Button onClick={handleEditPopup} className="text-gray-700 hover:text-gray-600 min-w-0 p-0">
                            <EditNoteIcon fontSize='medium' />
                        </Button>

                    </div>
                </div>
                <div className="p-6">
                    <Grid container spacing={6} >
                        <Grid item xs={12} md={6}>

                            <div className="space-y-2 mt-4 ">
                                <div className='flex gap-3 items-center '>
                                    <Typography variant="body2" className="text-sm text-gray-500">
                                        Lead Holder :
                                    </Typography>
                                    <Typography variant="body1">{leadInfo?.lead_holder?.name}</Typography>
                                </div>
                                <div className='flex gap-3 items-center '>
                                    <Typography variant="body2" className="text-sm text-gray-500">
                                        Email :
                                    </Typography>
                                    <Typography variant="body1">{leadInfo?.lead_holder?.email}</Typography>
                                </div>
                                <div className='flex gap-3 items-center '>
                                    <Typography variant="body2" className="text-sm text-gray-500">
                                        Phone :
                                    </Typography>
                                    <Typography variant="body1">{leadInfo?.lead_holder?.phone}</Typography>
                                </div>
                            </div>
                            <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: '750', marginTop: '0.6rem' }}>
                                Lead Details
                            </Typography>
                            <div className="space-y-2 mt-2">
                                <div className='flex gap-3 items-center'>
                                    <Typography variant="body2" className="text-sm text-gray-500">
                                        Lead Name :
                                    </Typography>
                                    <Typography variant="body1">{leadInfo?.name}</Typography>
                                </div>

                                <div className='flex gap-3 items-center'>
                                    <Typography variant="body2" className="text-sm text-gray-500">
                                        Company :
                                    </Typography>
                                    <Typography variant="body1">{leadInfo?.company}</Typography>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <Typography variant="body2" className="text-sm text-gray-500">
                                        Phone :
                                    </Typography>
                                    <Typography variant="body1">+91 {leadInfo?.phone}</Typography>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <Typography variant="body2" className="text-sm text-gray-500">
                                        Email :
                                    </Typography>
                                    <Typography variant="body1">{leadInfo?.email}</Typography>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <Typography variant="body2" className="text-sm text-gray-500">
                                        Date :
                                    </Typography>
                                    <Typography variant="body1">{leadInfo?.date ? new Date(leadInfo.date).toLocaleDateString() : 'N/A'}</Typography>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <Typography variant="body2" className="text-sm text-gray-500">
                                        Lead Source :
                                    </Typography>
                                    <Typography variant="body1">{leadInfo?.leadSource}</Typography>
                                </div>
                                <div className='flex gap-3 items-center '>
                                    <Typography variant="body2" className="text-sm text-gray-500">
                                        Lead Status :
                                    </Typography>
                                    <Chip label={leadInfo?.lead_status} variant='filled' color='secondary' sx={{ borderRadius: "5px" }} size='small' />
                                    {/* <Typography variant="body1">{leadInfo?.lead_status}</Typography> */}
                                </div>
                            </div>
                            <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: '750', marginTop: '0.6rem' }}>
                                Lead Address Details
                            </Typography>
                            <div className="space-y-2">
                                <div className=' flex gap-3 items-center'>
                                    <Typography variant="body2" className="text-sm text-gray-500">
                                        Address :
                                    </Typography>
                                    <Typography variant="body1">{leadInfo?.address}</Typography>
                                </div>
                                <div className=' flex gap-3 items-center'>
                                    <Typography variant="body2" className="text-sm text-gray-500">
                                        Country :
                                    </Typography>
                                    <Typography variant="body1">{leadInfo?.country}</Typography>
                                </div>
                                <div className=' flex gap-3 items-center'>
                                    <Typography variant="body2" className="text-sm text-gray-500">
                                        State :
                                    </Typography>
                                    <Typography variant="body1">{leadInfo?.state}</Typography>
                                </div>
                                <div className=' flex gap-3 items-center'>
                                    <Typography variant="body2" className="text-sm text-gray-500">
                                        City :
                                    </Typography>
                                    <Typography variant="body1">{leadInfo?.city}</Typography>
                                </div>

                                <div className=' flex gap-3 items-center'>
                                    <Typography variant="body2" className="text-sm text-gray-500">
                                        Zip Code :
                                    </Typography>
                                    <Typography variant="body1">{leadInfo?.pinCode}</Typography>
                                </div>
                            </div>

                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: '750', marginTop: '0.6rem' }}>
                                Documents
                            </Typography>
                            <div className="bg-gray-200 rounded-lg p-8 flex flex-col items-center justify-center">
                                <div className="bg-gray-300 p-4 rounded-lg mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="48"
                                        height="48"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-purple-500"
                                    >
                                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                        <polyline points="14 2 14 8 20 8" />
                                    </svg>
                                </div>
                                <Typography variant="body1" className="text-purple-700 font-semibold">
                                    No Documents
                                </Typography>
                            </div>
                            <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: '750', marginTop: '0.6rem' }}>
                                Description Information
                            </Typography>
                            <div className="bg-gray-200 rounded-lg p-8 flex flex-col items-center justify-center">
                                <Typography variant="body1" className="text-purple-700 font-semibold">
                                    Description is Empty
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            {editOpen && <EditLeadDetails editOpen={editOpen} handleEditPopup={handleEditPopup} leadId={leadId} />}
        </>
    )
}

export default LeadDetails
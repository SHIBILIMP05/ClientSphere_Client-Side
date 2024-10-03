import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, Button, Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import CloseIcon from '@mui/icons-material/Close';
import { fetchLeadInfo } from '../../services/apis/employeeApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { LeadData } from '../../interfaces/LeadsInterfaces';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Chip from '@mui/material/Chip';


interface Props {
    handleClose: React.Dispatch<React.SetStateAction<boolean>>;
    handleIs_open: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
    selectedLeadId: string;
}

const LeadDetailsPopup = ({ open, handleClose, selectedLeadId, handleIs_open }: Props) => {
    const employe = useSelector((state: RootState) => state.Employe)
    const [leadInfo, setLeadInfo] = useState<LeadData>()




    useEffect(() => {
        const status = fetchLeadInfo(selectedLeadId, employe.id)
        status.then((data) => {
            setLeadInfo(data.response.leadInfo)
        })
    }, [])


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
                open={open}
                onClose={handleClose}
                maxWidth="lg"
                fullWidth
                PaperProps={{
                    style: {
                        borderRadius: 16,
                        maxWidth: '64rem',
                    },
                }}
            >
                <DialogTitle className="flex justify-between items-center p-6 border-b">
                    <Typography variant="h5" component="div" className="text-2xl font-semibold">
                        Leads Details
                    </Typography>
                    <div className='space-x-1'>

                        <Button className="text-gray-700 hover:text-gray-600 min-w-0 p-0">
                            <PhoneIcon fontSize='medium' color='success' />
                        </Button>
                        <Button onClick={() => (handleIs_open(true))} className="text-gray-700 hover:text-gray-600 min-w-0 p-0">
                            <EditNoteIcon fontSize='medium' />
                        </Button>
                        <Button onClick={() => handleClose(false)} className="text-gray-700 hover:text-gray-600 min-w-0 p-0">
                            <CloseIcon color='action' />
                        </Button>
                    </div>
                </DialogTitle>
                <DialogContent sx={{ padding: '24px' }} className="p-6">
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
                            <div className="bg-gray-100 rounded-lg p-8 flex flex-col items-center justify-center">
                                <div className="bg-gray-200 p-4 rounded-lg mb-4">
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
                            <div className="bg-gray-100 rounded-lg p-8 flex flex-col items-center justify-center">
                                <Typography variant="body1" className="text-purple-700 font-semibold">
                                    Description is Empty
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>


        </>
    );
};

export default LeadDetailsPopup;
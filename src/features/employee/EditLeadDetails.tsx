import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, Button, Grid, Typography, MenuItem } from '@mui/material';

interface Props {
    handleIs_closed: React.Dispatch<React.SetStateAction<boolean>>;
    is_open: boolean
}
const EditLeadDetails = ({ is_open, handleIs_closed }: Props) => {
    const [leadStatus, setLeadStatus] = useState('');


    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLeadStatus(event.target.value);
    };

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
                open={is_open}
                onClose={handleIs_closed}
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
                    <Grid container spacing={3}>
                        {/* Lead Details */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="subtitle1" fontWeight="bold">
                                Lead Details
                            </Typography>
                            <TextField
                                color='secondary'
                                size='small'
                                fullWidth
                                label="Lead Name"
                                variant="standard"
                                margin="normal"
                            />
                            <TextField
                                color='secondary'
                                size='small'
                                fullWidth
                                label="Phone"
                                variant="standard"
                                margin="normal"
                            />
                            <TextField
                                color='secondary'
                                size='small'
                                fullWidth
                                label="Email"
                                variant="standard"
                                margin="normal"
                            />
                            <TextField
                                color='secondary'
                                size='small'
                                fullWidth
                                label="Company"
                                variant="standard"
                                margin="normal"
                            />
                            <TextField
                                color='secondary'
                                size='small'
                                fullWidth
                                label="Lead Source"
                                variant="standard"
                                margin="normal"
                            />
                            <TextField
                                color='secondary'
                                size='small'
                                select
                                fullWidth
                                label="Lead Status"
                                value={leadStatus}
                                onChange={handleStatusChange}
                                variant="standard"
                                margin="normal"
                            >
                                <MenuItem value="New Lead">New Lead</MenuItem>
                                <MenuItem value="In Hold">Call Not Connected</MenuItem>
                                <MenuItem value="Completed">Completed</MenuItem>
                                <MenuItem value="Rejected">Rejected</MenuItem>
                                <MenuItem value="Rejected">Intrested</MenuItem>
                                <MenuItem value="Rejected">Not Interested</MenuItem>
                                <MenuItem value="Rejected">Wants to do Payment</MenuItem>
                                <MenuItem value="Rejected">Customer</MenuItem>
                            </TextField>
                        </Grid>

                       
                        <Grid item xs={12} md={6}>
                            <Typography variant="subtitle1" fontWeight="bold">
                                Lead Address Details
                            </Typography>
                            <TextField
                                color='secondary'
                                size='small'
                                fullWidth
                                label="Country"
                                variant="standard"
                                margin="normal"
                            />
                            <TextField
                                color='secondary'
                                size='small'
                                fullWidth
                                label="City"
                                variant="standard"
                                margin="normal"
                            />
                            <TextField
                                color='secondary'
                                size='small'
                                fullWidth
                                label="State"
                                variant="standard"
                                margin="normal"
                            />
                            <TextField
                                color='secondary'
                                size='small'
                                fullWidth
                                label="Zip Code"
                                variant="standard"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="secondary" fullWidth>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default EditLeadDetails;

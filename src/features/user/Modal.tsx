import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: '#edebfc',
    border: '2px solid #a593f2',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',

};
interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}
export default function BasicModal({ isOpen, setIsOpen }: Props) {


    const handleClose = () => setIsOpen(false);

    return (
        <div>

            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                slotProps={{
                    backdrop: {
                        sx: {
                            backgroundColor: 'transparent'
                        }
                    }
                }}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" color={'#2c165f'} variant="h6" component="h2">
                        Success response
                    </Typography>
                    <Typography id="modal-modal-description" color={'#48268c'} sx={{ mt: 2 }}>
                        Your details have been successfully submitted. One of our team members will contact you within 24 hours. Thank you for your inquiry!
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

import { Link } from 'react-router-dom';
import "./card.scss";
import { useRef, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const CardDoctor = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className='font-poppins'>

 
        <div className='card-container'>
            
            <div className="left">
                <div className="info">
                    <div className="profile">
                        <img src="./img/doctor.png" alt="" />
                    </div>
                    <div className="desc">
                        <h3>Dr. Tasnim Sayed</h3>
                        <span>Pediatrics</span>
                        <div className="contact">
                            <img src="./icons/message.png" alt="" />
                            <img src="./icons/call.png" alt="" />
                        </div>
                    </div>
                    <div className="price">
                        <span>2000 DA</span>
                        <img src="./icons/dots.png" alt="" />
                    </div>
                </div>
                <div className="appointment">
                    <Link onClick={handleClickOpen}>
                        Make appointment
                        <div>
                            <img src="./icons/arrow.png" alt="" />
                            <img src="./icons/arrow.png" alt="" />
                        </div>
                    </Link>
                </div>
                <div className="rating">
                    <div className="item">
                        <span>Patient</span>
                        <div className="">
                            +423
                        </div>
                    </div>
                    <div className="item">
                        <span>Experience</span>
                        <div className="">
                            +8 years
                        </div>
                    </div>
                    <div className="item">
                        <span>Rating</span>
                        <div className="">
                            +423
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <h3>About a doctor</h3>
                <p>Ut voluptatem doloremque et debitis optio excepturi voluptatum repudiandae.<br /> Adipisci sit molestiae harum nobis eligendi soluta. Nisi dolore non. Totam ipsa <br /> aliquam dignissimos et animi. Et omnis sunt est.</p>
                <h4>Location</h4>
                <div className="location-container">
                    <div className="item">
                        <img src="./icons/card-location.png" alt="" />
                        <span>3891 Ranchview Dr.<br /> Richardson,<br />San Francisco 62639</span>
                    </div>
                    <div className="item">
                        <img src="./icons/hospital.png" alt="" />
                        <span>Iyade Cooper <br />Medical College</span>
                    </div>
                </div>
                <div className='map'>
                    <img src="./img/map.png" alt="" />
                </div>
            </div>
        </div>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle className='font-poppins'>Book an Appointment</DialogTitle>
        <DialogContent>
          <DialogContentText className="font-poppins">
            With Dr. Taylor Swift
          </DialogContentText>
          <TextField className="font-poppins"
            
            margin="dense"
            id="name"
            label="Date"
            type="date"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button className="font-poppins" onClick={handleClose}>Cancel</Button>
          <Button className="font-poppins" onClick={handleClose}>Set</Button>
        </DialogActions>
      </Dialog>
        </div>
    );
}

export default CardDoctor;

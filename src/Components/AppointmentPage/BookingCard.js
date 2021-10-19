import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppointmentForm from './AppointmentForm';






const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        border: "2px solid #ddd",
        borderRadius: "9px"
    },
});
const BookingCard = (props) => {
    const classes = useStyles();
    const { id, subject, visitingHour, totalSpace } = props.bookingData;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 text-center mt-5 mx-auto ">
            <Card className={`${classes.root} card-area`} >
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {subject}
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="p">
                            {visitingHour}
                        </Typography>
                        <Typography variant="small" color="textSecondary" component="p">
                            {totalSpace} SPACE AVAILABLE
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="" className="m-auto text-light button-style py-3" onClick={openModal}>
                        BOOK APPOINTMENT
                    </Button>
                </CardActions>
            </Card>
            <AppointmentForm
                modalIsOpen={modalIsOpen}
                bookSubject={subject}
                date={new Date()}
                closeModal={closeModal}>
            </AppointmentForm>
        </div>
    );
};

export default BookingCard;
import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PublicIcon from '@material-ui/icons/Public';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ScrollDialog from '../../components/UI/Dialog/ScrollDialog';
import DetailedProject from './DetailedProject/DetailedProject';

const useStyles = makeStyles(theme => ({
    sliderRoot: {
        maxWidth: 400,
        flexGrow: 1,
    },
    card: {
        maxWidth: 345,
        marginTop: 10,
        marginBottom: 10
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        // backgroundColor: red[500],
    },
    smallAvatar: {
        width: 25,
        height: 25
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: "auto",
        maxWidth: 400,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
    },
}));


export default function Project(props) {
    const images = props.project.images;
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    let slider = null;

    if (
        props.project.images &&
        props.project.images.length > 0 &&
        props.project.images[0].path &&
        props.project.images[0].path.length > 0
    ) {
        slider = <div className={classes.sliderRoot}>

            <Paper square elevation={0} className={classes.header}>
                <Typography variant="caption">{images[activeStep].label}</Typography>
            </Paper>
            <img
                className={classes.img}
                src={images[activeStep].path}
                alt={images[activeStep].label}
            />
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
                        Back
                    </Button>
                }
            />
        </div>
    }
    let cardImage = null;
    if (props.project.cardCover.length > 0) {
        cardImage = <CardMedia
            className={classes.media}
            image={props.project.cardCover}
            title={props.project.name}
        />
    }

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={<Avatar aria-label="Project" src={props.project.logo} className={classes.avatar}/>}
                title={props.project.name}
                subheader={props.project.dateCreated}
            />
            {slider || cardImage}
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.project.shortDescription}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="GitHub" target={"_blank"} href={props.project.github}>
                    <Avatar aria-label="Project" src={"https://pngimg.com/uploads/github/github_PNG42.png"}
                            className={classes.smallAvatar}/>
                </IconButton>
                <IconButton aria-label="Website" target={"_blank"} href={props.project.website}>
                    <PublicIcon/>
                </IconButton>
                <Grid container justify={'flex-end'}>
                    <ScrollDialog title={props.project.name}>
                        <DetailedProject description={props.project.longDescription}/>
                    </ScrollDialog>
                </Grid>
            </CardActions>
        </Card>
    );
}

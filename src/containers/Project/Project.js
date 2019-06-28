import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PublicIcon from '@material-ui/icons/Public';
import Grid from '@material-ui/core/Grid';
import ScrollDialog from '../../components/UI/Dialog/ScrollDialog';
import DetailedProject from './DetailedProject/DetailedProject';

const useStyles = makeStyles(theme => ({
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
}));


export default function Project(props) {
    const classes = useStyles();
    // const [expanded, setExpanded] = React.useState(false);

    // function handleExpandClick() {
    //     setExpanded(!expanded);
    // }

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={<Avatar aria-label="Project" src={props.project.logo} className={classes.avatar}/>}
                title={props.project.name}
                subheader={props.project.dateCreated}
            />
            <CardMedia
                className={classes.media}
                image={props.project.cardCover}
                title={props.project.name}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.project.shortDescription}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="GitHub">
                    <Avatar aria-label="Project" src={"https://pngimg.com/uploads/github/github_PNG42.png"}
                            className={classes.smallAvatar}/>
                </IconButton>
                <IconButton aria-label="Share">
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

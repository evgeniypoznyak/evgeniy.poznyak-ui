import React from 'react';
import {Bio} from '../../Data/skillFakeData';
// import avatarPicture from '../../../public/assets/me.jpg';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const Home = (props) => {
    const useStyles = makeStyles(theme => ({

        avatar: {
            margin: 10,
        },
        bigAvatar: {
            margin: 20,
            width: 100,
            height: 100,
        },
    }));

    const classes = useStyles();
    return (
        <div>
            <Grid container justify="flex-end">
                <Avatar alt="Evgeniy Poznyak" src={'/assets/me.jpg'} className={classes.bigAvatar}/>
            </Grid>
            {Bio}
        </div>
    )
}

export default Home

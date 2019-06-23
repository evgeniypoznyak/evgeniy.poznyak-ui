import React from 'react';
import {Grid, makeStyles, Paper} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(0.5),
    },
    input: {
        display: 'none',
    },
}));

const LeftPane = (props) => {
    const classes = useStyles();

    return (

            <Grid item sm={2} xs={6}>
                <Paper style={props.styles.Paper}>
                    <Grid container direction={'column'}>
                        <Button variant="contained" size="small" color="primary" className={classes.button}>PHP</Button>
                        <Button variant="contained" size="small" color="primary" className={classes.button}>Symfony</Button>
                        <Button variant="contained" size="small" color="primary" className={classes.button}>Laravel</Button>
                        <Button variant="contained" size="small" color="primary" className={classes.button}>Python</Button>
                    </Grid>
                </Paper>
            </Grid>

    )
};
export default LeftPane

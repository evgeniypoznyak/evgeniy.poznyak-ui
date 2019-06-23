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
const RightPane = (props) => {
    const classes = useStyles();
    return (
        <Box clone order={{ xs: 2, sm: 3 }}>
            <Grid item sm={2} xs={6}>
                <Paper style={props.styles.Paper}>
                    <Grid container direction={'column'}>
                        <Button variant="contained" size="small" color="primary" className={classes.button}>React</Button>
                        <Button variant="contained" size="small" color="primary" className={classes.button}>Angular</Button>
                        <Button variant="contained" size="small" color="primary" className={classes.button}>Vue</Button>
                        <Button variant="contained" size="small" color="primary" className={classes.button}>TDD</Button>
                    </Grid>
                </Paper>
            </Grid>
        </Box>

)};
export default RightPane;

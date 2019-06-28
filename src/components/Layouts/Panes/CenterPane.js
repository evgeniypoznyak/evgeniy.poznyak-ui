import React from 'react';
import {Grid, Paper} from '@material-ui/core';

const CenterPane = (props) => {

    return (
        <Grid item lg={8} md={8} sm={12} xs={12}>
            <Paper style={props.styles.CenterPane}>
                {props.children}
            </Paper>
        </Grid>
    )
};

export default CenterPane

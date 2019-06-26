import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import Box from '@material-ui/core/Box';


const CenterPane = (props) => {

    return (
        <Box clone order={{sm: 3, md: 2}}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
                <Paper style={props.styles.CenterPane}>
                    {props.children}
                </Paper>
            </Grid>
        </Box>
    )
};

export default CenterPane

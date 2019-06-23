import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import LeftPane from '../Panes/LeftPane';
import RightPane from '../Panes/RightPane';
import CenterPane from '../Panes/CenterPane';

const styles = {
    Paper: {
        padding: 5,
        marginTop: 5,
        marginBottom: 10,
    },
    CenterPane: {
        padding: 20,
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    }
};

const Main = (props) => (
    <Grid container justify={"space-between"} >
        <LeftPane styles={styles}/>
        <CenterPane styles={styles}/>
        <RightPane styles={styles}/>
    </Grid>
);

export default Main

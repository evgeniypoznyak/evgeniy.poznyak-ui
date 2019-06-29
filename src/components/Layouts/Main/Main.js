import React, {useContext} from 'react';
import {Grid} from '@material-ui/core';
import CenterPane from '../Panes/CenterPane';
import SkillPane from '../Panes/SkillPane';
import {State} from '../../../shared/StateManager';

const styles = {
    Paper: {
        // height: "100%",
        marginTop: 5,
        marginBottom: 10,
    },
    CenterPane: {
        height: "100%",
        padding: 20,
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    }
};

const Main = (props) => {
    const state = useContext(State);
    return (
    <Grid container justify={"space-between"} >
        <SkillPane styles={styles} skills={state.data.sortedData.left}/>
        <CenterPane styles={styles}>{props.children}</CenterPane>
        <SkillPane styles={styles} skills={state.data.sortedData.right}/>
    </Grid>
)};

export default Main

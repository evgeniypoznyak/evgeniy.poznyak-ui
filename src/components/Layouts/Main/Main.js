import React from 'react';
import {Grid} from '@material-ui/core';
import CenterPane from '../Panes/CenterPane';
import {skills} from '../../../Data/skillFakeData';
import SkillPane from '../Panes/SkillPane';

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
        <SkillPane styles={styles} skills={skills}/>
        <CenterPane styles={styles}>{props.children}</CenterPane>
        <SkillPane styles={styles} skills={skills}/>
    </Grid>
);

export default Main

import React, {Fragment, useContext} from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Project from '../Project/Project';
import {State} from '../../shared/StateManager';
import Spinner from '../../components/UI/Spinner/Spinner';

const Skill = (props) => {
    const skills = [];
    let selectedPath = '';
    const state = useContext(State);
    skills.push(...state.data.rawData);
    selectedPath = props.history.location.pathname.split("/").pop();
    let selectedSkill = skills.find(el => el.id === selectedPath);
    let content = <Spinner/>;
    if (selectedSkill) {
        content =
            <Fragment>
                <Grid container justify="center">
                    <Typography variant="h5" style={{
                        flexGrow: 1, textAlign: 'center', marginTop: 28
                    }}>
                        {selectedSkill.name}
                    </Typography>
                    <Avatar alt="Skill logo" src={selectedSkill.logo}
                            style={{margin: 5, width: 70, height: 70}}/>
                </Grid>
                <Typography variant="subtitle1">
                    {selectedSkill.description}
                </Typography>

                <Grid container justify={'space-evenly'}>
                    {selectedSkill.projects.map(project =>
                        <Grid item key={project.id + Math.floor(Math.random() * 20)}>
                            <Project project={project}/>
                        </Grid>
                    )}
                </Grid>
            </Fragment>
    }
    return (<Fragment>{content}</Fragment>)
};

export default Skill

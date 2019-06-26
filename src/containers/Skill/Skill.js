import React, {Component, Fragment} from 'react';
import {skills,} from '../../Data/skillFakeData';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Project from '../Project/Project';

class Skill extends Component {

    skills = [];
    selectedPath = '';
    selectedSkill = null;
    firstTime = true;

    constructor() {
        super();
        this.skills.push(...skills);
    }

    componentWillMount() {

        if (this.firstTime) {
            this.setupSkill();
            this.firstTime = false;
            this.props.history.listen(() => {
                this.setupSkill();
            });
        }


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    setupSkill() {
        this.selectedPath = this.props.history.location.pathname.split("/").pop();
        this.selectedSkill = this.skills.find(el => el.id === this.selectedPath);
    }

    componentDidMount() {

    }

    render() {
        let content = null;
        if (this.selectedSkill) {

            content =
                <Fragment>
                    <Grid container justify="center">
                        <Typography variant="h5" style={{
                            flexGrow: 1, textAlign: 'center', marginTop: 28
                        }}>
                            {this.selectedSkill.name}
                        </Typography>
                        <Avatar alt="Skill logo" src={this.selectedSkill.logo}
                                style={{margin: 5, width: 70, height: 70}}/>
                    </Grid>
                    <Typography variant="subtitle1">
                        {this.selectedSkill.description}
                    </Typography>
                    <Typography component="div">
                        {this.selectedSkill.projects.map(project => <Project key={project.id} project={project}/>)}
                    </Typography>
                </Fragment>
        }

        return (<Fragment>{content}</Fragment>)

    }

}

export default Skill;

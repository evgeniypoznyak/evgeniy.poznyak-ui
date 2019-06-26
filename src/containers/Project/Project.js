import React, {Component} from 'react';

class Project extends Component {
    project = this.props.project;
    render() {

        return (

                <div key={this.project.key}>{this.project.name}</div>

        )

    }

}

export default Project

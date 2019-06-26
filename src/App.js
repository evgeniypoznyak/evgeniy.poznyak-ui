import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import classes from './App.css';

import AsyncComponent from './hoc/AsyncComponent/AsyncComponent';
import Layout from './hoc/Layout/Layout';
import Spinner from './components/UI/Spinner/Spinner';
import Home from './containers/Home/Home';

const asyncAuth = AsyncComponent(() => {
    return import('./containers/Auth/Auth');
});
const asyncSkills = AsyncComponent(() => {
    return import('./containers/Skill/Skill');
});

class App extends Component {



    render() {

        let routes = (
            <Switch>

                <Route path={'/login'} component={asyncAuth}/>
                <Route path={'/skills/:skill'} component={asyncSkills}/>
                <Route path={'/'} exact component={Home}/>
                <Redirect to={'/'}/>
            </Switch>
        );

        if (false) {
            routes = (
                <Switch>
                </Switch>
            );
        };
        let app = (
            <div className={classes.App}>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );

        if (this.props.showSpinnerInsteadOfApp) {
            app = <Spinner/>;
        }

        return (
            app
        );



    }

}

export default withRouter(App);

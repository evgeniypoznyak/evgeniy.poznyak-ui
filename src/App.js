import React, {useEffect, useState} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import classes from './App.css';
import AsyncComponent from './hoc/AsyncComponent/AsyncComponent';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import axios from 'axios';
import {skills} from './shared/skillFakeData';
import {State, SortSkills} from './shared/StateManager'
import Spinner from './components/UI/Spinner/Spinner';

const asyncAuth = AsyncComponent(() => {
    return import('./containers/Auth/Auth');
});
const asyncSkills = AsyncComponent(() => {
    return import('./containers/Skill/Skill');
});

const App = (props) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        if (data === null) {
            (async () => {
                try {
                    const response = await axios.get('http://localhost:2222/api/skills');
                    setData({
                        rawData: response.data,
                        sortedData: SortSkills(response.data)
                    });
                } catch (e) {
                    console.log(`ERROR: ${e.message}`);
                    setData({
                        rawData: skills,
                        sortedData: SortSkills(skills)
                    });
                }

            })();
        }
    }, [data]);

    let routes = <Spinner/>;
    let content = <Spinner/>;
    routes = (
        <Switch>
            <Route path={'/login'} component={asyncAuth}/>
            <Route path={'/skills/:skill'} component={asyncSkills}/>
            <Route path={'/'} exact component={Home}/>
            <Redirect to={'/'}/>
        </Switch>
    );
    if (data) {
        content = <div className={classes.App}>
            <Layout>
                {routes}
            </Layout>
        </div>
    }
    let app = (
        <State.Provider value={{data: data, setdata: setData}}>
            {content}
        </State.Provider>
    );

    return (app);
};

export default withRouter(App);

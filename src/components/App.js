import React, {Component, Fragment} from 'react';
import './App.css';
import {Header, Footer} from './Layouts/';
import Main from './Layouts/Main/Main';

class App extends Component {

    render() {

        return (
            <Fragment>
                <Header/>
                <Main/>
                <Footer/>
            </Fragment>
        )

    }

}

export default App

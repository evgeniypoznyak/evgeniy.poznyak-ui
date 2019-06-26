import React, {Component, Fragment} from 'react';

import Main from '../../components/Layouts/Main/Main';
import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';

class Layout extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <Main>
                    {this.props.children}
                </Main>
                <Footer/>
            </Fragment>
        );
    }

}


export default Layout;

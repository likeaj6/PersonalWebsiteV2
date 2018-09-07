import React, { Component } from 'react';
import IntroSteps from '../../components/IntroSteps'
import { Loader, Header, Image, Divider, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'


const mapDispatchToProps = dispatch => bindActionCreators({
    menuClicked: (to) => {
        return push('/' + to)
    }
}, dispatch)

class Home extends Component {
    state = {
        response: ''
    };



    componentDidMount() {
    }

    render() {
        return (
            <div className="App-intro">
                <Header size='huge' textAlign='center' color='white'>
                </Header>
                <Image circular />
            </div>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Home)

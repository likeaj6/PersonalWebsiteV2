import Logo from '../assets/logo'
import { Menu, Checkbox } from 'semantic-ui-react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'

const mapDispatchToProps = dispatch => bindActionCreators({
    selectedMenuItem: (item) => push(item)
}, dispatch)

const items = [
    { to: '/', name: 'home', content: 'Home'},
    { to: '/about', name: 'about', content: 'About'},
    { to: '/projects', name: 'projects',content: 'Projects'},
    { to: '/portfolio', name: 'portfolio', content: 'Portfolio'},
]

class HeaderBanner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'home',
        }
    }
    
    componentDidMount() {
        // var handle = setInterval(this.awaitAction, 1000);
        this.setState({
        })
        // this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
    }

    handleMenuItemClick = (e, { name, to }) => {
        this.props.selectedMenuItem(to)
        this.setState({ activeItem: name })
    }

    render() {
        const { activeItem } = this.state
        let menuItems = items.map((item) => {
            return <Menu.Item {...item} active={ activeItem === item.name } onClick={this.handleMenuItemClick} />
        })
        return (
            <Menu secondary pointing borderless size='huge' id='banner'>
                {menuItems} 
                <Menu.Item position='right'>
                    <Checkbox toggle color='teal'/>
                </Menu.Item>
            </Menu>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(HeaderBanner)

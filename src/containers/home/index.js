import React, { Component } from 'react';
import IntroSteps from '../../components/IntroSteps'
import { Loader, Header, Image, Divider, Button, Card, Segment} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'

import { TransitionMotion, spring } from 'react-motion';

const leavingSpringConfig = { stiffness: 60, damping: 15 };

const mapDispatchToProps = dispatch => bindActionCreators({
    menuClicked: (to) => {
        return push('/' + to)
    }
}, dispatch)

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            response: '', 
            mouse: [], 
            now: 't' + 0 }
        ;
    };

    handleMouseMove = ({ pageX, pageY }) => {
        // Make sure the state is queued and not batched.
        this.setState(() => {
            return {
                mouse: [pageX - 25, pageY - 25],
                now: 't' + Date.now(),
            };
        });
    };

    handleTouchMove = (e) => {
        e.preventDefault();
        this.handleMouseMove(e.touches[0]);
    };

    willLeave = (styleCell) => {
        return {
            ...styleCell.style,
            opacity: spring(0, leavingSpringConfig),
            scale: spring(2, leavingSpringConfig),
        };
    };

    componentDidMount() {
    }

    render() {
        const { mouse: [mouseX, mouseY], now } = this.state;
        const styles = mouseX == null ? [] : [{
            key: now,
            style: {
                opacity: spring(1),
                scale: spring(0),
                x: spring(mouseX),
                y: spring(mouseY),
            }
        }];
        return (
            <div className="App-intro">
                <div>
                    <div className='stripes'>
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
                <TransitionMotion willLeave={this.willLeave} styles={styles}>
                    {circles =>
                        <div
                            onMouseMove={this.handleMouseMove}
                            onTouchMove={this.handleTouchMove}
                            className="ripple">
                            {circles.map(({ key, style: { opacity, scale, x, y } }) =>
                                <div
                                    key={key}
                                    className="ripple-ball"
                                    style={{
                                        opacity: opacity,
                                        scale: scale,
                                        transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                                        WebkitTransform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                                    }} />
                            )}
                        </div>
                    }
                </TransitionMotion>
                 <Image circular src=''/>
                 <Header size='huge' textAlign='center' id='name_banner'>
                     Jason Jin
                 </Header>
                <div class='wave -one'></div>
                <div class='wave -two'></div>
                <div class='wave -three'></div>
                <div class='wave -four'></div>
                <div class='wave -five'></div>
                <div class='wave -six'></div>
                <div class='wave -seven'></div>
                 <Button size='massive' />
            </div>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Home)

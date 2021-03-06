/**
 * Created by Bien on 2017-06-11.
 */
import React, { Component } from 'react';
import { changeToGreen, changeToRed } from '../actions/changeContent';
import { connect } from 'react-redux';




class Header extends Component {
    handleRedClick() {
        this.props.dispatch(changeToRed());
        //this.props.changeToRed();
    }

    handleGreenClick() {
        this.props.dispatch(changeToGreen());
        //this.props.changeToGreen();
    }

    render() {
        return (
            <div>
                <button
                onClick={() => this.handleRedClick()}
                >Red</button>
                <button
                    onClick={() => this.handleGreenClick()}
                >Green</button>
            </div>
        );
    }
}


export default connect()(Header);
//export default connect(null, { changeToGreen, changeToRed })(Header);

/**
 * Created by Bien on 2017-06-11.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TOGGLE_RED } from '../actions/changeContent';

class Content extends Component {
    render() {

        if (this.props.content.type === null) {
            return (
                <div>
                    select a color
                </div>
            );
        } else if (this.props.content.type === TOGGLE_RED) {
            return (
                <div>
                    <h3>The Red Spot</h3>
                </div>
            );
        } else {
            return (
                <div>
                    <h3>Though shall be Green</h3>
                </div>
            );
        }
    }
}


function mapStateToProps(state) {
    return {
        content: state.content
    };
}

export default connect(mapStateToProps)(Content);
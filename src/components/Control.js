import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onResetNumber: PropTypes.func,
    onRandomizeColor: PropTypes.func
};

const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract'),
    onResetNumber: createWarning('onResetNumber'),
    onRandomizeColor: createWarning('onRandomizeColor')
};

function createWarning(funcName) {
    return () => console.warn(`${funcName} is not defined`);
}


class Control extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onResetNumber}>Reset</button>
                <button onClick={this.props.onRandomizeColor}>Rendomize Color</button>
            </div>
        );
    }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;
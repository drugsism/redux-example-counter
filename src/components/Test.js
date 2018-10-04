import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Test extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}

Test.propTypes = {
    number: PropTypes.number
};

Test.defaultProps = {
    number: 0
}

export default Test;
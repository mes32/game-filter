import React from 'react';
import PropTypes from 'prop-types';
import './LinkButton.css';

function LinkButton(props) {
    const handleClick = () => {
        props.onClick();
    }

    if (props.selected) {
        return (<span className="selected">{props.value}</span>);
    } else {
        return (<button className="link-button" onClick={handleClick}>{props.value}</button>);
    }
}

LinkButton.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool
};

export default LinkButton;
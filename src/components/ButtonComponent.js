import React from 'react';

const button = (props)=>(
    <button className={props.className} onClick = {props.onClick}>
        {props.children}
    </button>
);

button.defaultProps={
    className :'btn',
};

export default button;
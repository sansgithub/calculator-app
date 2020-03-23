import React from 'react';

const button = (props)=>(
    <button className='btn' onClick = {props.onClick}>
        {props.children}
    </button>
);

export default button;
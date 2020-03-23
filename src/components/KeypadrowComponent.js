import React from 'react';

const KeyPadRow = (props)=>{
    return(
        <div className='keypadrow'>
            {props.children}
        </div>
    )
}

export default KeyPadRow;
import React from 'react';
import ComputeComponent from './ComputeComponent';
import ResultComponent from './ResultComponent';

const DisplayComponent = (props)=>(
            <section className='display-screen'>
                <ComputeComponent>{props.computation}</ComputeComponent>
                <ResultComponent>{props.result}</ResultComponent>
            </section>
        );

export default DisplayComponent;
import React, {Component} from 'react';
import KeyPadRow from './KeypadrowComponent';
import Button from './ButtonComponent';

const KeyPadComponent = (props) =>(
            <section className = 'keypad'>
                <KeyPadRow>
                    <Button onClick = {props.onClick}>C</Button>
                    <Button onClick = {props.onClick}>&larr;</Button>
                    <Button onClick = {props.onClick}>%</Button>
                    <Button onClick = {props.onClick}>*</Button>
                </KeyPadRow>
                <KeyPadRow>
                    <Button onClick = {props.onClick}>7</Button>
                    <Button onClick = {props.onClick}>8</Button>
                    <Button onClick = {props.onClick}>9</Button>
                    <Button onClick = {props.onClick}>-</Button>
                </KeyPadRow>
                <KeyPadRow>
                    <Button onClick = {props.onClick}>4</Button>
                    <Button onClick = {props.onClick}>5</Button>
                    <Button onClick = {props.onClick}>6</Button>
                    <Button onClick = {props.onClick}>+</Button>
                </KeyPadRow>
                <KeyPadRow>
                    <Button onClick = {props.onClick}>1</Button>
                    <Button onClick = {props.onClick}>2</Button>
                    <Button onClick = {props.onClick}>3</Button>
                    <Button onClick = {props.onClick}>/</Button>
                </KeyPadRow>
                <KeyPadRow>
                    <Button onClick = {props.onClick}>0</Button>
                    <Button onClick = {props.onClick}>.</Button>
                    <Button onClick = {props.onClick}>=</Button>
                </KeyPadRow>
            </section>
        );

export default KeyPadComponent;
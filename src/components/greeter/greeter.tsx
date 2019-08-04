import * as React from 'react';
import './greeter.scss';

interface GreeterProps {
    name: string
}

export const Greeter = (props: GreeterProps) => (
    <p className="greet">Hello, {props.name}</p>
);

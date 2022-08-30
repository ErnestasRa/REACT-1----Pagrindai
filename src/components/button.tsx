import * as React from 'react';
import classes from './button.module.scss';

console.log(classes)

type ButtonProps = {
    children?: React.ReactNode
    color?: 'primary' | 'secondary' | 'error' | 'warning'
}

const Button: React.FC<ButtonProps> = ({
    color = 'primary',
    children}) => {
    return (
        <button className={classes.btn + ' ' + classes[color]}>{children}</button>
    );
}

export default Button
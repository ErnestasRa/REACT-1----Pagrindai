import * as React from 'react';
import styles from './text-field.module.scss'

type TextFieldProps = {
    color?: 'primary' | 'secondary' | 'error' | 'warning'
}

const TextField: React.FC<TextFieldProps> = ({color = 'primary' }) => {
    return (
        <div className={styles.container + ' ' + styles[color]}>
            <label htmlFor=""></label>
            <input type="text"/>
        </div>
    );
}

export default TextField
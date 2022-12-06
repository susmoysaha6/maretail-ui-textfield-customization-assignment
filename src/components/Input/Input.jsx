import { TextField } from '@mui/material';
import React from 'react';
import styles from './Input.module.css'

console.log(styles);

const Input = () => {
    return (
        <div className={styles.inpContiner}>

            <TextField id="outlined-basic" key="Outlined" label="Outlined" variant="outlined"
                InputProps={{ className: styles.input }}
            />
        </div>
    );
};

export default Input;
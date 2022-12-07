import { TextField } from '@mui/material';
import React from 'react';
import './Input.css'



const Input = () => {
    return (
        <div className="inpContiner" >
            <h1>Basic outlined text field</h1>
            <TextField id="outlined-basic" label="Outlined" variant="outlined"
                className='input'
            />
        </div>
    );
};

export default Input;
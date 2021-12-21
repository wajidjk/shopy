import React from 'react';
import Button from '@mui/material/Button';

export function CustomButton(props) {
    return <Button onClick={props.onClick}>{props.text}</Button>;
}

import React from 'react';
import Button from '@material-ui/core/Button';

export default function CustomButton({ text }) {
    return (
        <Button variant="contained" color="gray" size="small">
            {text}
        </Button>
    );
}
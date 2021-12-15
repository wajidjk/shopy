import React from 'react';
import TextField from '@mui/material/TextField';
import { Button, createStyles, TextareaAutosize } from '@mui/material';
import './card.scss';

const defaultImage = 'http://www.vvc.cl/wp-content/uploads/2016/09/ef3-placeholder-image.jpg';

export default function Card(props) {
    const { value, setValue, eccodedImage, onSubmit } = props;

    const onChangeHandler = e => {
        setValue(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const onFileChange = e => {
        const files = e.target.files;
        const file = files.item(0);

        setValue(prev => ({ ...prev, image: file }));
    };

    return (
        <div className="card">
            <input
                name="file"
                type={'file'}
                id={'image'}
                style={{
                    display: 'none',
                }}
                onChange={onFileChange}
            />

            <label htmlFor="image">
                <img src={eccodedImage || defaultImage} />
            </label>

            <div>
                <TextField onChange={onChangeHandler} name="name" value={value.name} label="Outlined" />
            </div>
            <TextareaAutosize name="description" minRows={4} placeholder="Write a little description about the product" style={{ width: '100%' }} onChange={onChangeHandler} />
            <div>
                <TextField name="price" label="Outlined" type={'number'} onChange={onChangeHandler} />
            </div>
            <div>
                <Button variant="contained" onClick={onSubmit}>
                    Add Product
                </Button>
            </div>
        </div>
    );
}

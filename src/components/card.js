import React from 'react';
import TextField from '@mui/material/TextField';
import { Button, createStyles, TextareaAutosize, Typography } from '@mui/material';
import './card.scss';

const defaultImage = 'http://www.vvc.cl/wp-content/uploads/2016/09/ef3-placeholder-image.jpg';

export default function Card(props) {
    const { value, setValue, eccodedImage, onSubmit, edit } = props;

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
            {edit && (
                <input
                    name="file"
                    type={'file'}
                    id={'image'}
                    style={{
                        display: 'none',
                    }}
                    onChange={onFileChange}
                />
            )}

            <label htmlFor={'image'}>
                <img src={eccodedImage || defaultImage} />
            </label>

            {edit ? (
                <TextField onChange={onChangeHandler} name="name" value={value.name} label="Outlined" id="myId" />
            ) : (
                <Typography align="center" variant="h3" gutterBottom>
                    {value.name}
                </Typography>
            )}

            {edit ? (
                <TextareaAutosize
                    value={value.description}
                    name="description"
                    minRows={4}
                    placeholder="Write a little description about the product"
                    style={{ width: '100%' }}
                    onChange={onChangeHandler}
                />
            ) : (
                <Typography align="center" variant="h3" gutterBottom>
                    {value.description}
                </Typography>
            )}

            {edit ? (
                <TextField value={value.price} name="price" label="Outlined" type={'number'} onChange={onChangeHandler} id="myId" />
            ) : (
                <Typography align="center" variant="h4" gutterBottom>
                    {value.price}
                </Typography>
            )}

            {edit && (
                <Button variant="contained" onClick={onSubmit}>
                    Add Product
                </Button>
            )}
        </div>
    );
}

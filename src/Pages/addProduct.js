import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card';
import './addProduct.scss';
import { appContext } from '../store/ui';

export default function AddProduct(props) {
    const navigate = useNavigate();

    const [state, setState] = useState({
        image: null,
        name: '',
        description: '',
        price: 0,
    });

    const [eccodedImage, setEncodedImage] = useState();

    const onSubmit = () => {
        //TODO  post request to add product

        navigate('/products');
    };

    useEffect(() => {
        const { image } = state;

        if (state.image) {
            var fileReader = new FileReader();
            fileReader.readAsDataURL(image);

            console.log(fileReader);

            fileReader.onloadend = () => {
                setEncodedImage(fileReader.result);
            };

            fileReader.onerror = () => {
                console.log('error reading file');
            };
        } else {
            setEncodedImage(null);
        }
    }, [state.image]);

    return (
        <div className="parent">
            <Card value={state} setValue={setState} eccodedImage={eccodedImage} onSubmit={onSubmit} />
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import { CustomButton } from '../components/button';
import Card from '../components/card';

import { useNavigate, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function ProductDetail(props) {
    const navigate = useNavigate();
    const params = useParams();
    const [product, setProduct] = useState('');

    const onClickEdit = () => {
        navigate('/addProduct?id=' + params.id);
    };
    const onClickProduct = () => {
        navigate('/products');
    };

    const fetchProduct = async () => {
        const response = await axios.get('http://localhost:8000/api/product/' + params.id);
        setProduct(response.data.product);
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div>
            <div className="addProduct-header">
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: ' 1rem',
                        marginBottom: '2rem',
                    }}
                >
                    <CustomButton text={'All Products'} onClick={onClickProduct} />
                    <CustomButton text={'Edit '} onClick={onClickEdit} />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Card eccodedImage={'http://localhost:8000/' + product.image} setValue={setProduct} value={product} />
                </div>
            </div>
            <div></div>
        </div>
    );
}

import React, { useContext, useEffect, useState } from 'react';
import { CustomButton } from '../components/button';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Autocomplete, Input, InputAdornment, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { appContext } from '../store/ui';
import './products.scss';
import axios from 'axios';

export default function Products(props) {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/addProduct');
    };

    const handleRowClick = id => {
        navigate('/products/' + id);
    };

    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
            editable: false,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 200,
            editable: false,
        },
    ];

    const fetchProduct = async () => {
        const res = await axios.get('http://localhost:8000/api/product/');
        setProducts(res.data.product.map(el => ({ ...el, id: el._id })));
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    let rows = [...products];
    if (search) {
        rows = products.filter(el => el.name.includes(search));
    }

    return (
        <div>
            <div className="products-header">
                <div></div>
                <div>
                    <Typography variant="h2" component="div" gutterBottom align="center">
                        Shopy
                    </Typography>
                </div>
                <div>
                    <CustomButton text={'Add '} onClick={onClick} />
                </div>
            </div>
            <div>
                <TextField
                    style={{
                        width: '100%',
                    }}
                    label="Search Products"
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick={true}
                    onRowClick={(params, events, details) => {
                        handleRowClick(params.id);
                    }}
                />
            </div>
        </div>
    );
}

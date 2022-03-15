import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Product from './Blocks/Product';
import { createPayment, fetchProducts } from '../Services/Backend';

const Products = () => {

    const [products, setProducts] = useState([]);

    const initPayment = async () => {
        try {
            const [data, status] = await createPayment();
            console.log("DATA: ", data, "STATUS: ", status);
        } catch(error) {
            console.log(error);
        }
    };

    const findProds = async () => {
        try {
            const [data, status] = await fetchProducts();
            if(status == 200){
                setProducts(data);
            }

        } catch( error ) {
            console.log(error);
        }
    };

    const productHtml = products.map( ( item ) => {
        return (
            <Grid item xs={12} md={4} xl={4}>
                <Product key={item.id} json={item} />
            </Grid>
        );
    } );

    useEffect( () => {
        findProds();
    }, [products] );

    return (
        <>
            <Grid container spacing={3} rowSpacing={3} sx={{my: "2rem"}}>
                {productHtml}
            </Grid>
        </>
    );
};

export default Products;
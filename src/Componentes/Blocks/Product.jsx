import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { SERVER_PUBLIC } from '../../Services/Conection';

const Product = ({ json }) => {
    return (
        <>
            <Card>
                <CardMedia
                    component="img"
                    height="300"
                    image={ SERVER_PUBLIC + json.imageproductos}
                    alt={json.nameproductos}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {json.nameproductos}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">+ info</Button>
                    <Button size="small">Comprar</Button>
                </CardActions>
            </Card>
        </>
    );
};

export default Product;
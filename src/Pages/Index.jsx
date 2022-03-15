import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Products from '../Componentes/Products';

const IndexPage = () => {

    return (
        <>
            <Container maxWidth="md">
                <Products />
            </Container>
        </>
    );
};

export default IndexPage;
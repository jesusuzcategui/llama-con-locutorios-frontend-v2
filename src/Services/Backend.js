import axios from 'axios';

const createPayment = async () => {
    console.log(import.meta.env);
    try {
        let uri = import.meta.env.VITE_BACKENDURL + "createPayment";
        const { data, status } = await axios.post(uri, {});
        return [data, status];
    } catch (error) {
        throw new Error(error);
    }
};

const fetchProducts = async () => {
    try {
        let uri = import.meta.env.VITE_BACKENDURL + "products";
        const { data, status } = await axios.get(uri);
        return [data, status];
    } catch(error) {
        throw new Error(error);
    }
};

export { createPayment, fetchProducts };
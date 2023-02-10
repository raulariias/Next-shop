import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(API);
            setProducts(
                response.data.filter((item) => {
                    return item.id < 150;
                })
            );
        }
        fetchData();
    }, [API]);

    return products;
};

export default useGetProducts;

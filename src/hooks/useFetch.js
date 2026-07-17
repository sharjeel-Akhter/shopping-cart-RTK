import axios from 'axios';
import { useState, useEffect } from 'react';
export const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products?limit=194');
                if(!response){
                    throw new error("Something Went Wrong! Try again")
                }
                setData(response.data.products);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching data:', error.message);
            }finally {
                setLoading(false);
            }
        
        }
        fetchData();
    },[])
    return { data, loading, error };
};

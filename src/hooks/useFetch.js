import axios from 'axios';
import { useState, useEffect } from 'react';
export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                if(!response){
                    throw new Error("Something Went Wrong! Try again")
                }
                setData(response.data.products ?? response.data);
            } catch (error) {
                if (error.response?.status === 429) {
                    setError("Too many requests. Please wait a moment and try again.");
                } else {
                    setError(error.message);
                }
                setError(error.message);
                console.error('Error fetching data:', error.message);
            }finally {
                setLoading(false);
            }
        
        }
        fetchData();
    },[url])
    return { data, loading, error };
};

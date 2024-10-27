import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/b8a14f8e168b58522e2af911/latest/${currency}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                setData(data|| {});
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [currency]);

    console.log("Fetched Data:", data);
    return { data, loading, error };
}

export default useCurrencyInfo; 

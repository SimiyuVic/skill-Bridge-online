import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [allData, setAllData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw Error("Cannot Fetch Data");
                    }
                    return response.json(); //parsing
                })
                .then((data) => {
                    setAllData(data);
                    setLoading(false); //stop loading after you have gotten your dat
                    setError(null);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false); //stop loading incase you encounter an error
                })
        }, 3000); //a minute guys
    }, [url]);

    return { allData, error, loading }

}

export default useFetch;
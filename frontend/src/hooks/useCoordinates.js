import axios from "axios";
import { useEffect, useState } from "react";

const apiUrl = `${process.env.API_URL}/generateCoordinates`

const postData = {
    boundaryBox: {
        latitudeMin: -28.0407250895137,
        latitudeMax: -28.07199412367492,

        longitudeMin: 153.4079275405774,
        longitudeMax: 153.43933741928933
    },
    numberOfCoordinates: 4
}

export function useCoordinates() {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(postData);

    const refetch = () => {
        // Simulate a refetching by change one of the request param
        const numberOfCoordinates = Math.floor(Math.random() * (10 - 5 + 1) + 5);

        setData({ ...postData,  numberOfCoordinates })
    }

    useEffect(() => {
        fetchCoordinates = async () => {
            try {
                const response = await axios.post(apiUrl, data);
                setResponse(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchCoordinates();
    }, [apiUrl, data]);

    return { response, error, loading, refetch };
}
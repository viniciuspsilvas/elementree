import axios from "axios";
import { useEffect, useState } from "react";

export function useCoordinates() {
    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const data = {
                    boundaryBox: {
                        latitudeMin: -28.0407250895137,
                        latitudeMax: -28.07199412367492,

                        longitudeMin: 153.4079275405774,
                        longitudeMax: 153.43933741928933
                    },
                    numberOfCoordinates: 4
                }

                const response = await axios.post(
                    `${process.env.API_URL}/generateCoordinates`,
                    data
                );

                setCoordinates(response.data);
            } catch (error) {

                // TODO: Show a alert error
                console.error(error);
            }
        };

        fetchCoordinates();
    }, []);

    return { coordinates };
}
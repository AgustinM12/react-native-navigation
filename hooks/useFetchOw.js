import { useState, useEffect } from "react";

export const useFetchOw = () => {
    const [data, setData] = useState({}); 

    const findRandomCharacter = async () => {
        try {
            const response = await fetch(`https://overfast-api.tekrop.fr/heroes`);
            if (!response.ok) {
                throw new Error('Error al obtener datos del personaje');
            }
            const fullData = await response.json();
            setData(fullData);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        findRandomCharacter();
    }, []); 

    return { data, findRandomCharacter }; 
}

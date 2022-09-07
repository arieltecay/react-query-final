import React, { useEffect, useState } from 'react'
import { getBands } from '../api/apiBands';

const Bands = ({ setBandId }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [bandas, setBandas] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await getBands();
                setBandas(data);
                setError(null);
            } catch (error) {
                setError(error);
                setBandas(null);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);
    if (isLoading) {
        return (
            <div>
                <span className="spinner-border"></span> Loading Bandas...
            </div>
        );
    }

    if (error) {
        return (
            <section className="alert alert-danger">
                {error.message}
            </section>
        );
    }

    return (
        <section>
            <h2>Bandas:</h2>
            <ul>
                {bandas.map((band) => (
                    <li key={band.id}>
                        <a onClick={() => setBandId(band.id)} href="#">
                            {band.name}
                        </a>
                    </li>
                ))}
            </ul>
        </section>

    )
}

export default Bands
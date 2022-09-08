import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { getBands } from '../api/apiBands';

const Bands = ({ setBandId }) => {
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);
    // const [bandas, setBandas] = useState(null);

    const { data: bandas, error, isLoading, isFetching } = useQuery('bandas', getBands)

    // console.log(data);

    /*     useEffect(() => {
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
        }, []); */


    if (isLoading) {
        return (
            <div>
                <span className="spinner-border"></span> Loading Bandas...
            </div>
        );
    }

/*     if (isFetching) {
        return (
            <div>
                <span className="spinner-border"></span> Fetching...
            </div>
        );
    } */
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
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { getBandById } from '../api/apiBands';

const Band = ({ bandId }) => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [banda, setBanda] = useState(null);

  const { data: banda, error, isLoading, isFetching } = useQuery(['bandas', bandId], () => getBandById(bandId), { refetchOnWindowFocus: false })


  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const data = await getBandById(bandId);
  //       setBanda(data);
  //       setError(null);
  //     } catch (error) {
  //       setError(error);
  //       setBanda(null);
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, [bandId]);


  if (isLoading) {
    return (
      <div>
        <span className="spinner-border"></span> Loading Banda...
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger">
        Error fetching banda: {error.message}
      </div>
    );
  }
  return (
    <article>
      <h1>{banda.name}</h1>
      <p>{banda.genre}</p>
    </article>
  )
}

export default Band
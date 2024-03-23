import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

const useFatchByRegion = () => {
  const [countries, setCountries] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');
  useEffect(() => {
    if (!searchQuery) return;
    const fetchData = async () => {
      setLoader(true);

      try {
        const data = await fetchByRegion(searchQuery);
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [searchQuery]);
  const onHandleSubmit = value => {
    setSearchParams({ q: value });
  };
  return { countries, loader, error, onHandleSubmit };
};

export default useFatchByRegion;

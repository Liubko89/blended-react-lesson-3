import {
  Container,
  CountryInfo,
  GoBackBtn,
  Heading,
  Loader,
  Section,
} from 'components';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';

const Country = () => {
  const [country, setCountry] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const { countryId } = useParams();

  const location = useLocation();
  console.log(location, country);
  const goBack = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);

      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [countryId]);
  console.log(country);
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBack.current}>Back to countries</GoBackBtn>
        {loader && <Loader />}
        {error && <Heading title="Something went wrong ..." bottom />}
        {country && <CountryInfo {...country} />}
      </Container>
    </Section>
  );
};

export default Country;

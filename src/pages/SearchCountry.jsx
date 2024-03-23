import {
  Container,
  CountryList,
  Heading,
  Loader,
  SearchForm,
  Section,
} from 'components';
import useFatchByRegion from '../hooks/useFatchByRegion';

const SearchCountry = () => {
  const { countries, loader, error, onHandleSubmit } = useFatchByRegion();
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onHandleSubmit} />
        {loader && <Loader />}
        {error && <Heading title="Something went wrong ..." bottom />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};

export default SearchCountry;

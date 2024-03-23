import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { lazy } from 'react';
const HomePage = lazy(() => import('pages/Home'));
const CountryPage = lazy(() => import('pages/Country'));
const SearchCountryPage = lazy(() => import('pages/SearchCountry'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/country" element={<SearchCountryPage />} />
        <Route path="/country/:countryId" element={<CountryPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

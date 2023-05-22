import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContinentsListPage from './pages/ContinentsListPage';
import ContinentPage from './pages/ContinentPage';
import CountryPage from './pages/CountryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContinentsListPage />} />
        <Route path='/continent/:code' element={<ContinentPage />} />
        <Route path='/country/:code' element={<CountryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

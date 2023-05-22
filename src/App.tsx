import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContinentsListPage from './pages/ContinentsListPage';
import ContinentPage from './pages/ContinentPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContinentsListPage />} />
        <Route path='/:code' element={<ContinentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Providers from './providers';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Providers>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Providers>
    </BrowserRouter>
  );
}

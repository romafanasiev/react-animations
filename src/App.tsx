import { Nav, Routes } from './components';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes />
    </BrowserRouter>
  );
};


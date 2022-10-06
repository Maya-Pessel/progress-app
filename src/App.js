
import { Route, Routes } from 'react-router-dom';

import Menu from './components/menu';
import './css/app.css';
import Home from './pages/home';
import TechnoAdd from './pages/technoAdd';
import TechnoList from './pages/technoList';

function App() {
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/add" element={ <TechnoAdd />} />
        <Route path="/list" element={ <TechnoList />} />
      </Routes>

    </>
  );
}

export default App;

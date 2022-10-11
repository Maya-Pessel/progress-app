
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";

import Menu from './components/menu';
import './css/app.css';
import Home from './pages/home';
import TechnoAdd from './pages/technoAdd';
import TechnoList from './pages/technoList';

function App() {
  const[technos, setTechnos] = useState([]);

  function handleAddTechno(techno) {
    console.log('handleAddTechno', technos);
    setTechnos([...technos, techno]);
  }
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/add" element={ <TechnoAdd handleAddTechno={handleAddTechno} />} />
        <Route path="/list" element={ <TechnoList technos={technos}/>} />
      </Routes>

    </>
  );
}

export default App;

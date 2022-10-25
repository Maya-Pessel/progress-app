
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";

import {v4 as uuidv4} from 'uuid';


import Menu from './components/menu';
import './css/app.css';
import Home from './pages/home';
import TechnoAdd from './pages/technoAdd';
import TechnoList from './pages/technoList';
import { useLocalStorage } from "./hooks/useLocalStorage.js";

function App() {

  // HOOKS
  const[technos, setTechnos] = useState([]);
  const STORAGE_KEY = "technos";
  // eslint-disable-next-line
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);


  // Enregistrer les technos dans le local storage
  useEffect(() => {
    console.log("useEffect");
    // eslint-disable-next-line
    setTechnos(storedTechnos);
    // eslint-disable-next-line
  }, [setTechnos]);

  useEffect(() => {
    console.log("useEffect");
    // eslint-disable-next-line
    setStoredTechnos(technos)
    // eslint-disable-next-line
  }, [technos]);

  // Ajouter unz techno
  function handleAddTechno(techno) {
    console.log('handleAddTechno', technos);
    setTechnos([...technos, {...techno, technoId: uuidv4()}]);
    
  }
  // Supprimer une techno
  function handleDeleteTechno(technoId) {
    console.log('handleDeleteTechno', technoId);
    setTechnos(technos.filter((techno) => techno.technoId !== technoId));
  }

  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/add" element={ <TechnoAdd handleAddTechno={handleAddTechno} />} />
        <Route path="/list" element={ <TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno} />} />
      </Routes>

    </>
  );
}

export default App;

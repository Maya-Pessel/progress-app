import Menu from './components/menu';
import './css/app.css';
import Home from './pages/home';
import TechnoAdd from './pages/technoAdd';
import TechnoList from './pages/technoList';

function App() {
  return (
    <>
      <Menu></Menu>
      <Home></Home>
      <TechnoAdd/>
      <TechnoList/>
    </>
  );
}

export default App;

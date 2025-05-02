import "./css/App.css"
import Favourite from './pages/Favourites';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"

function App() {

  return (
    <div>
      <Navbar/>
    <main className='main-content'>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favourites" element={<Favourite/>} />
      </Routes>
    </main>    
    </div>
  );
}
import { Form } from 'react-router-dom';

export default App

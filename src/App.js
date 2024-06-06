import { Route, Routes } from 'react-router-dom';
import './App.css';
import Gallery from './Gallery/Gallery';
import PictureDetails from './PictureDetails/PictureDetails';

function App() {
  return (
    <Routes>
    <Route path ='/' element={<Gallery/>}/>
    <Route path ='/:id' element={<PictureDetails/>}/>
    <Route path ='*' element={<h1>NOT FOUND</h1>}/>

  </Routes>
  );
}

export default App;

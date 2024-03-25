
import './App.css';
import { Signup } from './components/Signup/Signup';
import { Hub } from './components/Hub/Hub';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes >  
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Hub' element={<Hub />} />

      </Routes>
    </BrowserRouter>
      
      
  );
}


export default App;
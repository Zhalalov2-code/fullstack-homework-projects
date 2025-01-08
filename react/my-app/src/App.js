import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Konverter from './pages/konverter';
import Calculator from './pages/calc';
import Terminal from './pages/banktermin';
import Gpacalculator from './pages/gpacalculator';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Calculator/>} />
            <Route path='/konverter' element={<Konverter/>} />
            <Route path='/banktermin' element={<Terminal/>} />
            <Route path='/gpacalculator' element={<Gpacalculator/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
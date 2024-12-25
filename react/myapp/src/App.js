import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/main';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Main/>} />
              <Route path='/navbar' element={<Navbar/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

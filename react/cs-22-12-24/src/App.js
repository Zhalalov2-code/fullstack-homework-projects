import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
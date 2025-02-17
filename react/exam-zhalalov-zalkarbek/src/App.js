import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import HabitDetails from './pages/habit.details';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/habit.details/:id' element={<HabitDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

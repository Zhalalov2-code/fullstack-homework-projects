import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Konverter from './pages/konverter';
import Calculator from './pages/calc';
import Terminal from './pages/banktermin';
import Gpacalculator from './pages/gpacalculator';
import Average from './pages/gradeAverage';
import CalcGPA from './pages/calcGPA';
import FuelCalc from './pages/fuel';
import LoginLocal from './pages/loginLocal';
import TodoList from './pages/todoList';
import User from './pages/user.managment';
import NewUser from './pages/addNewUser';
import Auto from './pages/auto';
import Dolist from './pages/todolist2';
import Registr from './pages/authentication';
import LocalUser from './pages/localuser';
import Localstoragecart from './pages/localstoragCart';
import ManagerZametki from './pages/zametki';
import Main from './pages/mian';
import Products from './pages/products';
import Users from './pages/users';
import Magazin from './pages/magazin';
import CartPage from './pages/basket';
import ProductDetails from './pages/product.details';
import BookStore from './pages/bookStore';
import BookDetails from './pages/book.details';
import Login from './pages/logIn';
import UserProf from './pages/userProf';
import Messenger from './pages/messenger';
import Chat from './pages/chat';
import ApiTest1 from './pages/apiTest1';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Calculator/>} />
            <Route path='/konverter' element={<Konverter/>} />
            <Route path='/banktermin' element={<Terminal/>} />
            <Route path='/gpacalculator' element={<Gpacalculator/>} />
            <Route path='/gradeAverage' element={<Average/>} />
            <Route path='/calcGPA' element={<CalcGPA/>} />
            <Route path='/fuel' element={<FuelCalc/>} />
            <Route path='/loginLocal' element={<LoginLocal/>} />
            <Route path='/todoList' element={<TodoList/>} />
            <Route path='/user.managment' element={<User/>} />
            <Route path='/addNewUser' element={<NewUser/>} />
            <Route path='/auto' element={<Auto/>} />
            <Route path='/todolist2' element={<Dolist/>} />
            <Route path='/authentication' element={<Registr/>} />
            <Route path='/localuser' element={<LocalUser/>} />
            <Route path='/localstoragCart' element={<Localstoragecart/>} />
            <Route path='/zametki' element={<ManagerZametki/>} />
            <Route path='/main' element={<Main/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/magazin' element={<Magazin/>} />
            <Route path='/basket' element={<CartPage/>} />
            <Route path='/product.details/:id' element={<ProductDetails/>} />
            <Route path='/bookStore' element={<BookStore/>} />
            <Route path='/book.details/:id' element={<BookDetails/>} />
            <Route path='/logIn' element={<Login/>} />
            <Route path='/userProf' element={<UserProf/>} />
            <Route path='/messenger' element={<Messenger/>} />
            <Route path='/chat' element={<Chat/>} />
            <Route path='/apiTest1' element={<ApiTest1/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
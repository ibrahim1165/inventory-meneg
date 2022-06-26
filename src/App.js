import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nabver from './Componets/Shared/Nabver'
import Login from './Componets/Auth/Login';
import Signup from './Componets/Auth/Signup';
import Home from './Componets/Home/Home';
import AddItem from './Componets/Shared/AddItem';

function App() {
  return (
    <div>
      <Nabver />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/item" element={<AddItem />}  />
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/signup" element={ <Signup />} ></Route>
      </Routes>
    </div>
  );
}

export default App;

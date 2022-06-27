import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nabver from './Componets/Shared/Nabver'
import Login from './Componets/Auth/Login';
import Signup from './Componets/Auth/Signup';
import Home from './Componets/Home/Home';
import AddItem from './Componets/Shared/AddItem';
import Footer from './Componets/Shared/Footer';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Profile from './Componets/Profile/Profile';

function App() {
  return (
    <div>
      <Nabver />
      <Routes>
        <Route path="/" element={<Home />}  />
        {/* <Route path="/profile" element={<Profile />}  /> */}
        <Route path="/item" element={<AddItem />}  />
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/signup" element={ <Signup />} ></Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;

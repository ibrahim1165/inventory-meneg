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
import Computer from './Componets/Cetagory/Computer';
import Laptops from './Componets/Cetagory/Laptops';
import Services from './Componets/Service/Services';
import ComputerAddProduct from './Componets/AddProduct/ComputerAddProduct';
import LapAddProduct from './Componets/AddProduct/LapAddProduct';
import Update from './Hook/Update';


function App() {
  return (
    <div>
      <Nabver />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/computer" element={<Computer />}  />
        <Route path="/laptop" element={<Laptops />}  />
        <Route path="/services" element={<Services />}  />
        <Route path="/profile" element={<Profile />}  />
        <Route path="/add" element={<AddItem />}  />
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/com" element={<ComputerAddProduct  />}  />
        <Route path="/lap" element={<LapAddProduct />}  />
        <Route path="/signup" element={ <Signup />} ></Route>
        {/* <Route path="/update/:id" element={ <Update />} ></Route> */}
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;

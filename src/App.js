import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home.jsx';
import About from './Component/Pages/About.jsx';
import Gallery  from './Component/Pages/Gallery.jsx';
import Contact from './Component/Pages/Contact.jsx';
import Errorpage  from './Component/Pages/Errorpage.jsx';
import Register from './Component/Pages/Register/Register.jsx';
import Signup from './Component/Pages/Register/Signup.jsx';
import Login from './Component/Pages/Register/Login.jsx';
function App() {
  return (
    <div className='text-center'>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path ='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path ='/gallery' element={<Gallery/>}></Route>
          <Route path ='/contact' element={<Contact/>}></Route>
          <Route path ='/register' element={<Register/>}>
            <Route path='/register/signup' element={<Signup/>}></Route>
            <Route path='/register/login' element={<Login/>}></Route>
          </Route>
          <Route path='/*' element={<Errorpage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

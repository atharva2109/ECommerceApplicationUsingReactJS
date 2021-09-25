import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';
import { ToastContainer } from 'react-toastify';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Greet from './components/ChatBot';

function App() {
  return (
    <div className='App'>
   <ToastContainer/>
   <NavBar/>
   <Greet/>
  <Footer/>
   </div>
  );
}

export default App;

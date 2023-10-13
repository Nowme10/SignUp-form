
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Home from './component/Home';
import {Routes, Route} from 'react-router-dom';
import Login from './component/Login';



function App() {
  return (
   <>  
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login'  element={<Login />}/>
  </Routes>
  
   </>
  );
}

export default App;

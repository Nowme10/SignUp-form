
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Home from './component/Home';
import {Routes, Route} from 'react-router-dom';
import Login from './component/Login';
import Details from './component/Details';
    


function App() {
  return (
   <>  
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login'  element={<Login />}/>
    <Route path='/details'  element={<Details />}/>
  </Routes>
  
   </>
  );
}

export default App;

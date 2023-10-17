
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import router from './router';
import { RouterProvider } from 'react-router-dom';
    


function App() {
  return (
   <>  
  <Header/>
 
  <RouterProvider router={router} />
   </>
  );
}

export default App;

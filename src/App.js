import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';

// import ListOfCustomers from './components/ListOfCustomers';
// import GetCustomerById from './components/GetCustomerById';
// import AddCustomer from './components/AddCustomer';
// import Register from './components/Register';
// import UpdateCustomer from './components/UpdateCustomer';
import GetuserbyId from './components/getUserbyId';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
               

          <Route path="/getuserbyId/:id" element={<GetuserbyId/>} />    
          
          
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
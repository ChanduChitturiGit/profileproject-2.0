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
// import GetuserbyId from './components/getUserbyId';
import Login from './components/loginPage';
import useToken from './components/useToken';
import Home from './components/home';
import RegisterPage from './components/register';
import GetuserbyId from './components/getUserbyId';


function App() {
  const { id, token, removeToken, setToken, setId } = useToken();

  return (
    
    // <div className="App">
    //       <Router>
    //   <div className="App">
    //     {/* <Header token={removeToken}/> */}
    //     {!token && token!=="" &&token!== undefined?  
    //      <Route path='/login' element={<Login setToken={setToken}/>} />
    //     :(
    //       <>
    //         <Routes>
    //           <Route exact path='/getuserbyId/:id' element={<GetuserbyId token={token} setToken={setToken}/>}></Route>
    //           {/* <Route exact path="/profile" element={<Profile token={token} setToken={setToken}/>}></Route> */}
    //         </Routes>
    //       </>
    //     )}
    //   </div>
    // </Router>
    <div>
      <Router>
        <Routes> 
          <Route path='/home' elemnt={<Home/>}/>   
          <Route path='/' element={<Login setToken={setToken} setId={setId}/>} />
          <Route path='register' element={<RegisterPage/>}/>
          <Route path="/getuserbyId/:id" element={<GetuserbyId id={id} token={token} setToken={setToken}/>} />    
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
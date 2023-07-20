import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import {getUserbyId} from '../services/userService';


function GetuserbyId() {
    const [user, setUser] = useState(null);
    
    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(()=>{
        getUserbyId(id).then(resp=>setUser(resp.data));
    })

    // const handleDelete = () => {
    //     deleteCustomer(id).then(resp=>navigate(-1))
    // }

    return(
        <div className="container">
            <h1 className="text-center">Customer Details</h1>
            <div className = "card col-md-6 offset-md-3 offset-md-3">
                      <div className = "card-body">
            {
                user !=null && 
                <div><h4>
                  <p>Id: {user.id}</p>
                  <p>FirstName: {user.firstname}</p>
                  <p>LastName: {user.lastname}</p>
                  <p>Mobile Number: {user.mobile}</p>
                  <p>Email: {user.email}</p>
                  <p>UserName : {user.username}</p>
                  </h4>

                  <button class="btn btn-warning">delete</button>

                </div>
            }
        </div>
        </div>
        </div>
    )
}
export default GetuserbyId;
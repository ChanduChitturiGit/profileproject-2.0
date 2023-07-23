import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getUserbyId } from '../services/userService';


function Home() {
    // const [user, setUser] = useState(null);

    // const {id} = useParams();
    // const navigate = useNavigate();

    // useEffect(()=>{
    //     getUserbyId(id).then(resp=>setUser(resp.data));
    // })

    // const handleDelete = () => {
    //     deleteCustomer(id).then(resp=>navigate(-1))
    // }

    return (
        <div className="container">
        <h1 className="text-center">Customer Details</h1>
        <div className = "card col-md-6 offset-md-3 offset-md-3">
                  <div className = "card-body">
        <div>
            Welcome to the APK
            <Link to="/getuserbyId/:id"><button class="btn btn-warning">Profile</button></Link>

        </div>
    </div>
    </div>
    </div>
    )
}
export default Home;
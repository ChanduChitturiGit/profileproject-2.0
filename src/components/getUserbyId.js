import { useState } from 'react'
import axios from "axios";
import { base_url } from '../util/appConstants';

function GetuserbyId(props) {

    const [profileData, setProfileData] = useState(null)
    // function getData() {
        const id=props.id
        axios({
            method: "GET",
            url: base_url + '/getUser/'+id,
            headers: {
                Authorization: 'Bearer ' + props.token
            }
        })
            .then((response) => {
                console.log("t2")
                const res = response.data
                res.access_token && props.setToken(res.access_token)
                setProfileData(({
                    id: response.data.id,
                    username: response.data.username,
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    mobile: response.data.mobile,
                    email: response.data.email
                }))
            }).catch((error) => {
                if (error.response) {
                    alert("Unwanted.")
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            })
    // }

    return (
            <div className="container">
                <h1 className="text-center">Profile</h1>
                <div className="card col-md-6 offset-md-3 offset-md-3">
                </div>

                {/* <p>To get your profile details: </p><button onClick={getData}>Click me</button> */}
                {profileData && <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className='text-center'><h4>
                        <p>Id: {profileData.id}</p>
                        <p>FirstName: {profileData.firstname}</p>
                        <p>LastName: {profileData.lastname}</p>
                        <p>Mobile Number: {profileData.mobile}</p>
                        <p>Email: {profileData.email}</p>
                        <p>UserName : {profileData.username}</p>
                    </h4>

                        <button class="btn btn-warning">Logout</button>

                    </div>
                    

                </div>
            
        }

        </div>

    );
}

export default GetuserbyId;
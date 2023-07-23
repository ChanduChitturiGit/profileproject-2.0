import { useState } from 'react';
import axios from "axios";
import { base_url } from '../util/appConstants';
import { Link } from "react-router-dom"

function Login(props) {

    const [loginForm, setloginForm] = useState({
        username: "",
        password: ""
    })

    function logMeIn(event) {
        // getUserbyId(id).then(resp=>setUser(resp.data));
        axios({
            method: "POST",
            url: base_url + "/login",
            data: {
                username: loginForm.username,
                password: loginForm.password
            }
        })
            .then((response) => {
                props.setToken(response.data.access_token)
                props.setId(response.data.id)
                
            }).catch((error) => {
                if (error.response) {
                    alert("Unwanted_Exception")
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            })

        setloginForm(({
            username: "",
            password: ""
        }))

        event.preventDefault()
        console.log("login")
        console.log(props.id)
    }

    function handleChange(event) {
        const { value, name } = event.target
        setloginForm(prevNote => ({
            ...prevNote, [name]: value
        })
        )
    }

    return (
        <div>
            <h1>Login</h1>
            <form className="login">
                <input onChange={handleChange}
                    type="text"
                    text={loginForm.username}
                    name="username"
                    placeholder="username"
                    value={loginForm.username} />
                <input onChange={handleChange}
                    type="password"
                    text={loginForm.password}
                    name="password"
                    placeholder="Password"
                    value={loginForm.password} />

                <button onClick={logMeIn}><Link to="/getuserbyId/:id">Submit</Link></button><br></br>
                <p>Don't have an Account : </p><Link to="/register"><button type="button" className="btn btn-success">
                    Register Now
                </button>
                </Link>
            </form>
        </div>
    );
}

export default Login;
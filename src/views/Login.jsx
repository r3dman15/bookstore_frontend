import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";


const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [notFound, setNotFound] = useState(true)
    const [init, setInit] = useState(true)




    const onButtonClick = (email) => {
        axios.get(`http://localhost:8080/bookstore/customer/findByEmail?email=${email}`
        )
            .catch(er => console.log(er))
            .then(res => {
                setNotFound(res.data.length <= 0)
            }) ;
        setInit(false)

    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Login</div>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={email}
                placeholder="Enter your email here"
                onChange={ev => setEmail(ev.target.value)}
                className={"inputBox"} />
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                type={"password"}
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"} />
        </div>
        <br />
        { notFound && !init  && <Link to={"/register"}> <label style = {{color: "Red"}}>User not found register here </label></Link>}
        <Link to={!notFound ? "/home" : null}>
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={() => onButtonClick(email)}
                value={"Log in"} />
        </div>
        </Link>
    </div>
}

export default Login
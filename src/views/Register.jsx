import React, {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const Login = (props) => {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState({})
    const [password, setPassword] = useState("")


    const onButtonClick = () => {

        let customerRequest = {
            customer: {firstName, lastName, email, password},
            address: address
        };
        console.log(address)
        axios.post("http://localhost:8080/bookstore/customer-with-address", customerRequest
        )
            .catch(er => console.log(er))
            .then(res => console.log(res))
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Register</div>
        </div>
        <br/>
        <div className={"inputContainer"}>
            <input
                placeholder={"First Name"}
                value={firstName}
                onChange={ev => setFirstName(ev.target.value)}
                className={"inputBox"}/>
        </div>
        <br/>
        <div className={"inputContainer"}>
            <input
                placeholder={"Last Name"}
                value={lastName}
                onChange={ev => setLastName(ev.target.value)}
                className={"inputBox"}/>
        </div>
        <br/>
        <div className={"inputContainer"}>
            <input
                placeholder={"Email"}
                value={email}
                onChange={ev => setEmail(ev.target.value)}
                className={"inputBox"}/>
        </div>
        <br/>
        <div className={"inputContainer"}>
            <input
                type={"password"}
                placeholder={"Password"}
                value={password}
                onChange={ev => setPassword(ev.target.value)}
                className={"inputBox"}/>
        </div>
        <br/>
        <div className={"inputContainer"}>
            <input
                placeholder={"Street"}
                value={address.street}
                onChange={ev => setAddress({...address, street: ev.target.value})}
                className={"inputBox"}/>
        </div>
        <br/>
        <div className={"inputContainer"}>
            <input
                placeholder={"City"}
                value={address.city}
                onChange={ev => setAddress({...address, city: ev.target.value})}
                className={"inputBox"}/>
        </div>
        <br/>
        <div className={"inputContainer"}>
            <input
                placeholder={"State"}
                value={address.state}
                onChange={ev => setAddress({...address, state: ev.target.value})}
                className={"inputBox"}/>
        </div>
        <br/>
        <div className={"inputContainer"}>
            <input
                placeholder={"Zipcode"}
                value={address.zip}
                onChange={ev => setAddress({...address, zip: ev.target.value})}
                className={"inputBox"}/>
        </div>
        <br/>
        <div className={"inputContainer"}>
            <input
                placeholder={"Country"}
                value={address.country}
                onChange={ev => setAddress({...address, country: ev.target.value})}
                className={"inputBox"}/>
        </div>
        <br/>
        <Link to="/home" >
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Submit"}/>
        </div>
        </Link>
    </div>
}

export default Login
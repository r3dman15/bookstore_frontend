import React from "react"
import { Link } from "react-router-dom";

const Landing = (props) => {
    const { loggedIn, email } = props

    const onButtonClick = () => {
        
    }

    return <div className="mainContainer">
        <div className={"titleContainer"}>
            <div>Welcome!</div>
        </div>
        <div>
            Mathew Wright, ..., ..., ...
        </div>
        <Link to={"/login"}  >
        <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={loggedIn ? "Log out" : "Log in"} />
            {(loggedIn ? <div>
                Your email address is {email}
            </div> : <div/>)}
        </div>
        </Link>


    </div>
}

export default Landing
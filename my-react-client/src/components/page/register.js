import React from "react";
import {useNavigate} from "react-router-dom";

function Register (){
    const navigate = useNavigate()
    return (
        <div>
            <p>Register</p>
            <button onClick={()=>{
                navigate("/views/myImage")
            }}>to myImage</button>
        </div>
    )
}
export default Register
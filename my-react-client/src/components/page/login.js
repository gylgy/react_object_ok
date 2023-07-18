import React from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate=useNavigate();
    return (
        <div>
            <p>login</p>
            <button onClick={()=>{
                navigate("/register")
            }}>to register</button>
        </div>
    )
}
export default Login
import React from "react"
import { useNavigate } from "react-router-dom"

function MyImage (){
    const navigate = useNavigate();
    return(
        <>
            <div>myImage</div>
            <button onClick={()=>{
                navigate("/views/myInform")
            }}>to myInform</button>
        </> 
    )
}
export default MyImage
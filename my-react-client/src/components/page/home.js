import React from "react";
import "../../static/styles/home.css"
import {useNavigate} from "react-router-dom"
function Home (){
    const navigate = useNavigate()
    return(
        <div>
            <p>home</p>
            <button className="btn btn-danger buttonPub" onClick={()=>{
                navigate("/login")
            }}>to login</button><br/>

            <button className="btn btn-success buttonPub" onClick={()=>{
                navigate("/menu/topMenu")
            }}>to TopMenu</button><br/>

            <button className="btn btn-danger buttonPub" onClick={()=>{
                navigate("/listPageTmp")
            }}>列表界面</button><br/>
        </div>
    )
}
export default Home
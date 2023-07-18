import React, { useEffect, useState } from "react"
function ToDoChild (props){
    const [info,setInfo] =useState([]);
    useEffect(
        ()=>{
            const MyFunction=props.messageEvent
            MyFunction()
            console.log("props",props)
            setInfo(props.listToChild)
        },[]
    )
    return(
        <div className="alert alert-info">
            <div>
                <p>显示从前一页传来的值，数组的第一组值</p>
                <ul>
                    {/* <li>{info[0].name}</li>
                    <li>{info[0].age}</li>
                    <li>{info[0].job}</li>
                    <li>{info[0].sex}</li> */}
                </ul>
                <p>接受传来的变量</p>
                <span> {props.msg}</span>
            </div>
        </div>
    )
}
export default ToDoChild
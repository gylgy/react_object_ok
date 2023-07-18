import { useState, useRef, useEffect } from "react";
import ToDoChild from "./myChild";

/**
 * hook ブック
 * 输入框input是表单form的一个组件，
 * form一般用来登录注册，填写信息等，是获取各种情报的一种工具。 
 * 输入框input也可以不和form同时使用。可单独使用并通过方法获得输入框内的信息。
 */
function MyToDo() {
    //声明一个对象数组list，在中括号里赋值
    var list = [
        {
            name: "田中一",
            age: 22,
            sex: "女",
            job: "IT",
        },
        {
            name: "田中二",
            age: 17,
            sex: "男",
            job: "JAVA",
        },
        {
            name: "田中三",
            age: 32,
            sex: "男",
            job: "HTML",
        },
        {
            name: "田中四",
            age: 27,
            sex: "女",
            job: "C++",
        }
    ];
    const [userName, setUserName] = useState("")
    const [age, setAge] = useState(0)
    const sexRef = useRef(null)
    const jobRef = useRef(null)
    var data;
    const addToDoList = () => {
        data = {
            name: userName,
            age: age,
            sex: sexRef.current.value,
            job: jobRef.current.value,
        }
        list.push(data);
    }
    function sendMessage(){
        alert("123445")
    }
    useEffect(
        () => { addToDoList() }, [data]
    )

    return (
        <div className="container">
            {/* <form action=""></form> */}
            <div className="alert alert-success">
                <div>
                    <h2>MyToDo</h2>
                </div>
                <div>
                    <label htmlFor="">name:</label>
                    <input onChange={
                        (e) => {
                            setUserName(e.target.value)
                            // console.log(userName)

                        }
                    } type="text" /><br /><br />
                    <label htmlFor="">age:</label>
                    <input onChange={
                        (e) => {
                            setAge(e.target.value)
                            // console.log(age)
                        }
                    } type="text" /><br /><br />
                    <label htmlFor="">sex:</label>
                    <input type="text" ref={sexRef} /><br /><br />
                    <label htmlFor="">job:</label>
                    <input type="text" ref={jobRef} /><br /><br />
                    <button className="btn btn-success form-control " onClick={addToDoList}>add toDoList</button><hr />
                </div>
                <div>
                    {/* 对list数组使用map()函数进行循环遍历。 */}
                    {list.map(
                        (item) => {
                            return (
                                <ul key={item.age}>
                                    <li>name:{item.name}</li>
                                    <li>age:{item.age}</li>
                                    <li>job:{item.job}</li>
                                    <li>sex:{item.sex}</li>
                                </ul>
                            )
                        }
                    )}
                </div>
                <hr />
            </div>
            <div>
                <ToDoChild listToChild={list} 
                msg= "我是GYL"
                messageEvent ={sendMessage}
                />
            </div>
        </div>
    )
}
export default MyToDo
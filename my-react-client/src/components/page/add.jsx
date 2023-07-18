import React, { useState } from "react"
import { $http } from "../../service";
import { useNavigate } from "react-router-dom"

function Add() {
    const navigate = useNavigate();
    const [brandname, setBrandname] = useState("");
    const [brandPrice, setBrandPrice] = useState("");
    //和输入框绑定并获取输入的值name
    const handleName = (e)=>{
        const name = e.target.value
        setBrandname(name)
    }
    //和输入框绑定并获取输入的值price
    const handlePrice = (e)=>{
        const price = e.target.value
        setBrandPrice(price)
    }
    //创造一个对象data，并向后方发送 
    const send = ()=>{
        //获取输入的值，然后付给对象data
        
        // const data = 
        // console.log("data",data)
        //向后端发送请求，并传递参数data。并把data保存到数据库。
        // 把数据保存到数据库，就叫做数据的持久化。
        // 保存数据使用post方法。
        $http.post("/create/brand",{
            brandname:"brand1",
            brandPrice:"passwd1 ",
            // ctime:2023-5-31,
        })
        .then(res=>{console.log("data",res.data)})
        .catch(err=>{console.error(err)})

    }
    return (
        <>
            <div className="container">
                <div className="alert alert-success">
                    <div className="form-group">
                        <h1>创建品牌</h1>
                        <div>
                            <button className="btn btn-success" onClick={() => {
                                navigate("/listPageTmp")
                            }}>返回列表</button><hr />
                        </div>
                    </div>
                    <div className="form-group">
                        <label >品牌名称：</label>
                        {/* input输入框，用来输入信息 */}
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="请输入品牌名称" 
                        onChange={(e)=>{
                            handleName(e)
                        }}
                        /><hr />
                    </div>
                    <div className="form-group">
                        <label >品牌价格：</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="请输入品牌价格" 
                        onChange={(e)=>{
                            handlePrice(e)
                        }}
                        /><hr />
                    </div>
                    <div>
                        <button className="btn btn-primary form-control" onClick={() => {
                            send()
                        }}>提交</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Add
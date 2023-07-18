import { useEffect, useState } from "react"
import { $http } from "../../service"
import React from "react"
import { useNavigate } from "react-router-dom"

function ListPageTmp() {
    // useState用来声明变量list数组变量，这里初始化为一个空数组。在括号里。
    //setList方法表示对list重新赋值
    const [list, setList] = useState([])
    //表示初始化时的动作，获取初始数据
    useEffect(
        () => {
            $http.get("/brands")
                .then((res) => {
                    // console.log(res.data)
                    setList(res.data)
                }).
                catch((err) => { console.error(err) })
        }, []
    )
    const deleteBrand = (id) => {
        $http.delete(`/delete/brand/${id}`)
            .then((res) => { console.log(res.data) })
            .catch((err) => { console.error(err) })
    }
    const navigate = useNavigate();
    return (
        <>
            <div className="container">
                <div className="alert alert-info">
                    <div className="form-group">
                        <h1>品牌列表</h1>
                        <div>
                            <button className="btn btn-primary" onClick={() => {
                                navigate("/add")
                            }}>
                                创建品牌
                            </button>
                            <button className="btn btn-primary" onClick={() => { }}>
                                登录页面
                            </button>
                        </div>
                    </div><hr />
                    <div className="form-group">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>品牌名称</th>
                                    <th>品牌价格</th>
                                    <th>购买时间</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list.map(
                                    (item) => (
                                        <tr key={item._id}>
                                            <td>{item.brandname}</td>
                                            <td>{item.brandPrice}</td>
                                            <td>{item.ctime}</td>
                                            <td>
                                                <div>

                                                    <button className="btn btn-success"
                                                    //点击编辑按钮，跳转到编辑页面。
                                                    // 并且把本组数据item传给编辑页面。叫做页面间传值
                                                    //页面间传值有很多方法，本次采用路由传值，通过navigate。
                                                    //navigate传值采用固定方式，必须按照规定方式，数据放在state里。
                                                        onClick={() => {
                                                            navigate("/upData", {
                                                                state: { item }
                                                            })
                                                        }}
                                                    >编辑</button>
                                                    <button className="btn btn-danger"
                                                        onClick={() => {
                                                            deleteBrand(item._id)
                                                        }}
                                                    >删除</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListPageTmp
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { $http } from "../../service";

function UpData() {
    const navigate = useNavigate();
    const locationItem = useLocation()
     //声明一个本页变量itemData，用来接收从列表页面传过来的值。
    // 接收在useEffect的箭头函数里进行,用函数setItemData(要接受的数据)
    const [itemData, setItemData] = useState(locationItem.state.item)
    const handlePrice = (e) => {
        const price = e.target.value
        setBrandPrice(price)
    }
    const handleName = (e) => {
        const name = e.target.value
        setBrandname(name)
    }
    const send = () => {
        const id = state.state.item._id
        const data = {
            brandname: "brand1",
            brandPrice: "passwd1 ",
        }
        $http.put(`/update/brand/${id}`,data)
            .then(res => { console.log("data", res.data) })
            .catch(err => { console.error(err) })
    }
    
    return (
        <>
            <div className="container">
                <div className="alert alert-success">
                    <div className="form-group">
                        <h1>修改品牌</h1>
                        <div>
                            <button className="btn btn-success" onClick={() => {
                                navigate("/listPageTmp")
                            }}>返回列表</button><hr />
                        </div>
                    </div>
                    <div className="form-group">
                        <label >品牌名称：</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="请修改品牌名称"
                            onChange={(e) => {
                                handleName(e)
                            }}
                        //value表示输入框的值
                            value={itemData.brandname}
                        /><hr />
                    </div>
                    <div className="form-group">
                        <label>品牌价格:</label>
                        <input type="text"
                            className="form-control"
                            placeholder="请修改品牌价格"
                            onChange={(e) => {
                                handlePrice(e)
                            }}
                            value={itemData.brandPrice}
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
export default UpData

//json字符串，通过字符串形式，来表达json数据。例子
// "brandname:true, brandPrice:'passwd1'" 
//json对象，通过对象形式，来表达json数据。例子 
// {
//     brandname: "brand1",
//     brandPrice: "passwd1 ",
// }
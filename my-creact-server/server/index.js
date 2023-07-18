const express = require("express")
const cors = require("cors")//导入跨域（模块）工具
const app = express()//生成express的实例
//解决跨域问题
app.use(cors())
//解决json转换问题，必须写，不写收不到前端传来的参数
app.use(express.json())
const {BrandModel} = require ("./model")
//app下有四种请求方法，
//第一个：app.get()  get是查询数据并获取所需数据。
//第二个：app.post()  是用来创建数据并传递参数。
//第三个：app.put()  用来更改数据并传递参数（更改的条件）
//第四个：app.delete() 用来删除某个数据，并传递参数（删除的条件）
app.get("/",async (request,response,next)=>{
    const resDate = "返回给前端的数据 get请求方法"//假数据
    response.send(resDate)
})
//查询所有数据，用find（）
app.get("/api/brands",async (req,res)=>{
    const brandsResult = await BrandModel.find()
    res.send(brandsResult)
})
//删除一个品牌,用delete
app.delete("/api/delete/brand/:id",async (req,res)=>{
    const id = req.params.id
    const removeBrand = await BrandModel.findByIdAndDelete(id)
    res.send(removeBrand)    
})
//创建一个品牌，用post接收
app.post("/api/create/brand",async (req,res)=>{
    // console.log(req.body)
    const brand = await BrandModel.create(req.body)
    res.send(brand)
})
//用来更新数据
app.put("/api/update/brand/:id",async (req,res)=>{
    const brand = await BrandModel.findByIdAndUpdate(req.params.id,req.body)
    console.log(req.params.id,req.body)
    res.send(brand)

})

app.listen(3001,()=>{
    console.log("http://localhost:3001")
})



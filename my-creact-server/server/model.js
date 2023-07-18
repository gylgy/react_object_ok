//mongoose是操作mongodb的一种工具，可以不用导入mongodb，就可以对数据库进行增减改查的工作。
const mongoose = require("mongoose")
mongoose.connect(
    "mongodb+srv://gaohong:gyl0216gyb0216@cluster0.evogn.mongodb.net/test?retryWrites=true&w=majority",
    {
        // useCreateIndex: true,
        // useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
const BrandSchema = new mongoose.Schema({
    brandname:{type:String},
    brandPrice:{type:String},
    // ctime:{type:Date}
})
const BrandModel = mongoose.model("brands",BrandSchema)

module.exports = {
    BrandModel,
}

function MyInform() {
    // 声明空数组：[]
    const dataArray = []

    // 声明字符串数组：
    const strArray = ["你好", "我好", "他好", "大家好"]

    // 声明数字数组：
    const numArray = [1, 2, 3, 4, 5, 6]

    // 声明空对象：{}就是对象
    const object = {}

    // 声明对象：{ } 就是对象
    const object1 = {
        name: "孙悟空",
        age: 22,
        userInfo:{},
        job:["IT","animate","part-time job"]
    }

    // 声明一般函数(无函数参数)，用function
    function playFunctiion (){
        alert("我是函数")
    }
    // 声明一般函数(有函数参数)，用function
    function playFunctiionParams (arg1,arg2){
        alert(arg1)
        alert(arg2)

    }
    //声明箭头函数
    const arrowPlayFunction =()=>{
        console.log("我是无参箭头函数")
    }

    //声明有参箭头函数,参数名可根据需要随意定义(实际现场会提供命名规则)
    const arrowPlayFunctionParams =(Par1,par2)=>{
        console.log("我是有参箭头函数")

    }

    return (
        <div>
            <h1>myInform</h1>
            <p>
                显示已声明的数组
            </p>
            <div>
                {strArray}
            </div>
            <div>
                {numArray}
            </div>
            <div>
            </div>
            <div>

            </div>
        </div>
    )
}
export default MyInform;

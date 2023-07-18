function User (){
    const PAGE_TOKEN="const用来声明常量并赋值,不可改变"
    let str="我是变量"+
    "122"
    let strNew=`我是新符号，可换行
    abc
    123

    lala
    `
    return (
        <>
            <p>显示变量内容</p>
            <p>str:{str}</p>
            <p>PAGE_TOKEN:{PAGE_TOKEN}</p>
            <p>{1+2+3}</p>
            <p>三元表达式:{3>5?"a":"b"}</p>
            <p>{strNew}</p>
        </>
    )
}
export default User
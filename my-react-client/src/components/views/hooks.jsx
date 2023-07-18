import React, { useState } from "react"
function Hooks() {
    const str = "我是高源璐 js"
    //useState定义对象
    const [name, setName] = useState("高源璐")
    const [password, setPassword] = useState(123456)
    const change = () => {
        setName("文教大学")
        setPassword(654321)
    }
    return (
        <div>
            <p>
                Hooks views
            </p>
            <div>
                <label htmlFor="">js:</label>
                {str}
            </div>
            <div>
                <p>
                    hook:
                </p>
                <label htmlFor="">name:</label>
                {name}<br />
                <label htmlFor="">password:</label>
                {password}<br />
                <button onClick={change}>change</button>
            </div>
        </div>
    )
}
export default Hooks
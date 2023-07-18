import { useNavigate } from "react-router-dom"
import "../../static/styles/publicStyle.css"
function TopMenu() {
    const navigate = useNavigate();
    return (
        <>
            <p>topMenu</p>
            <div>
                <button className="btn btn-primary buttonPub" onClick={() => {
                    navigate("/user")
                }}>to user</button>
            </div>

            <div>
                <button className="btn btn-success buttonPub" onClick={() => {
                    navigate("/views/myList")
                }}>to MyList</button>
            </div>

            <div>
                <button className="btn btn-danger buttonPub" onClick={() => {
                    navigate("/views/myToDo")
                }}>to MyToDo</button>
            </div>

            <div>
                <button className="btn btn-danger buttonPub" onClick={()=>{
                    navigate("/views/myInform")
                }}>to myInform</button>
            </div>

            <div>
                <button className="btn btn-success buttonPub" onClick={()=>{
                    navigate("/views/hooks")
                }}>to hooks</button>
            </div>
        </>
    )
}
export default TopMenu
import TopMenu from "../components/menu/topMenu";
import Home from "../components/page/home";
import Login from "../components/page/login";
import Register from "../components/page/register";
import User from "../components/page/user";
import Hooks from "../components/views/hooks";
import MyImage from "../components/views/myImage";
import MyInform from "../components/views/myInform";
import MyList from "../components/views/myList";
import MyToDO from "../components/views/myToDo";
import ListPageTmp from "../components/page/listPageTmp.jsx";
import Add from "../components/page/add";
import UpData from "../components/page/upData";


const routers=[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/views/myImage",
        element:<MyImage/>
    },
    {
        path:"/views/myInform",
        element:<MyInform/>
    },
    {
        path:"/user",
        element:<User/>
    },
    {
        path:"/views/myList",
        element:<MyList/>
    },
    {
        path:"/views/myToDo",
        element:<MyToDO/>
    },
    {
        path:"/menu/topMenu",
        element:<TopMenu/>
    },
    {
        path:"/views/hooks",
        element:<Hooks/>
    },
    {
        path:"/listPageTmp",
        element:<ListPageTmp/>
    },
    {
        path:"/add",
        element:<Add/>
    },
    {
        path:"/upData",
        element:<UpData/>
    }

]
export default routers
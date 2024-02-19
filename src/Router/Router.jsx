import { createBrowserRouter, } from "react-router-dom";
import App from "../App";
import Main from "../Layouts/Main";
import Home from "../Components/Home";
import AllToys from "../Components/AllToys/AllToys";
import MyToys from "../Components/MyToys/MyToys";
import AddToys from "../Components/AddToy/AddToys";
import Error from "../Error";
import Login from "../Components/Form/Login";
import Registretion from "../Components/Form/Registetion";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'all-toys',
                element: <AllToys></AllToys>
            },
            {
                path: 'my-toys',
                element: <MyToys></MyToys>
            },
            {
                path: 'add-toy',
                element: <AddToys></AddToys>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'reg',
                element: <Registretion></Registretion>
            },
            {
                path: '*',
                element: <Error></Error>
            },
        ]
    },
]);
export default router;
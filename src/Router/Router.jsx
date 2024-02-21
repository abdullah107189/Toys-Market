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
import My_Toys_View from "../Components/MyToys/My_Toys_View";
import My_Toys_Update from "../Components/MyToys/My_Toys_Update";
import PriveteRoute from "../Route/PriveteRoute";
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
                element: <PriveteRoute><MyToys></MyToys></PriveteRoute>,
            },
            {
                path: 'add-toy',
                element: <PriveteRoute> <AddToys></AddToys></PriveteRoute>
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
                path: 'toy-view/:id',
                element: <My_Toys_View></My_Toys_View>,
                loader: ({ params }) => fetch(`http://localhost:5000/myToys/${params.id}`)
            },
            {
                path: 'my-toy-view/:id',
                element: <My_Toys_View></My_Toys_View>,
                loader: ({ params }) => fetch(`http://localhost:5000/myToys/${params.id}`)
            },
            {
                path: 'my-toy-update/:id',
                element: <My_Toys_Update></My_Toys_Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/myToys/${params.id}`)
            },
            {
                path: '*',
                element: <Error></Error>
            },
        ]
    },
]);
export default router;
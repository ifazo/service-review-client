import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Main from "../Outlet/Main";
import Blogs from "../components/Blogs/Blogs";
import MyReviews from "../components/Reviews/MyReviews";
import AddServices from "../components/Services/AddServices";
import Services from "../components/Services/Services";
import Login from "../components/Login/Login";
import CardDetails from "../components/Cards/CardDetails";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/services")
           },
           {
               path: "/services",
               element: <Services></Services>
           },
           {
                path: "/services/:id",
                element: <CardDetails></CardDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
           },
           {
                path: "/blogs",
                element: <Blogs></Blogs>,
           },
           {
                path: "/reviews",
                element: <MyReviews></MyReviews>
           },
           {
                path: "/addservice",
                element: <AddServices></AddServices>
           },
           {
               path: "/signin",
               element: <Login></Login>
           }
        ]
    }
])
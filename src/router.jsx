import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import Home from "./Components/pages/Home";
import Movies from "./Components/pages/Movies";
import Tv from "./Components/pages/Tv";
import People from "./Components/pages/People";
import Login from "./Components/pages/Login";
import Signup from "./Components/pages/Signup";
import Movie from "./Components/pages/Movie";

export const router = createBrowserRouter([
    {
        element : <App />,
        children : [
            {
                path: '/',
                element : <Home />
            },
            {
                path: '/movies',
                element : <Movies />
            },  
            {
                path: '/movie/:id',
                element : <Movie />
            },  
            {
                path: '/tv',
                element : <Tv />
            },
            {
                path: '/people',
                element : <People />
            },
            {
                path: '/login',
                element : <Login />
            },
            {
                path: '/signup',
                element : <Signup />
            }
        ]
    }
])
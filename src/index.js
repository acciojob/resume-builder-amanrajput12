import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Mini from "./components/Mini/Mini";
import Social from "./components/Social/Social";
import { Store } from "./components/Store/Store";
import {Provider} from "react-redux"
import Resume from "./components/Resume/Resume";

const router = createBrowserRouter([
    {
        path:"",
        element:<App/>,
        children:[
            {
                path:"",
                element:<Profile/>
            },
            {
                path:"Education",
               element:<Education/>

            },
            {
                path:"Skills",
                element:<Skills/>
            },
            {
                path:"Mini",
                element:<Mini/>
            },
            {
                path:"Social",
                element:<Social/>
            }
        ]
        
    },
    {
        path:"/resume",
        element:<Resume/>
    }
    
])

ReactDOM.render(<Provider store={Store}>
<RouterProvider  router={router} />
</Provider>
, document.getElementById("root"));

import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage.jsx';
import PostList from '../pages/PostList.jsx';
import Write from '../pages/Write.jsx'; 
import PostDetail from "../pages/PostDetail.jsx";
import Edit from "../pages/Edit.jsx";


const root = createBrowserRouter([

{
    path: "",
    element: <HomePage  />
},
{
    path: "/posts",
    element: <PostList  />
},
{
    path: "/posts/:id",
    element: <PostDetail  />
},
{
    path: "/write",
    element: <Write  />
},
{
    path: "/edit/:id",
    element: <Edit  />
},






]
)


export default root;
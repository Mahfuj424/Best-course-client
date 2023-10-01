import {
     createBrowserRouter,
} from "react-router-dom";
import Home from "../../Main/Home/Home";
import Courses from "../../components/Courses/Courses";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../../Main/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Dashboard from "../Dashboard";
import CourseDetails from "../CourseDetails/CourseDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ManageUser from "../ManageUser";
import SelectCourse from "../SelectCourse/SelectCourse";
import WatchVideo from "../WatchVideo/WatchVideo";
import ManageClasses from "../ManageClasses/ManageClasses";
import AddClass from "../AddClass/AddClass";
import AddQuiz from "../AddQuiz/AddQuiz";
import MyClasses from "../MyClasses/MyClasses";

const Route = createBrowserRouter([
     {
          path: "/",
          element: <Main />,
          errorElement: <ErrorPage />,
          children: [
               {
                    path: "/",
                    element: <Home />,
               },
               {
                    path: "courses",
                    element: <Courses />,
               },
               {
                    path: "courseDetails/:id",
                    element: <PrivetRoute><CourseDetails /></PrivetRoute>,
                    loader: () => fetch("https://best-course-server.vercel.app/course")
               },
               {
                    path: "register",
                    element: <Register />,
               },
               {
                    path: "login",
                    element: <Login />,
               }
          ]
     },
     {
          path: "dashboard",
          element: <PrivetRoute><Dashboard /></PrivetRoute>,
          children: [
               {
                    path: "manageClasses",
                    element: <ManageClasses />
               },
               {
                    path: "manageUser",
                    element: <ManageUser />
               },
               {
                    path: "addClass",
                    element: <AddClass />
               },
               {
                    path: "addQuiz",
                    element: <AddQuiz />,
               },
               {
                    path: "myClasses",
                    element: <MyClasses />
               },
               {
                    path: "selectCourses",
                    element: <SelectCourse />,
               },
               {
                    path: "watchVideo/:id",
                    element: <WatchVideo />
               }
          ]
     }
])

export default Route;
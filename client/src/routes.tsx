import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyJourney from "./pages/MyJourney";
import UserDashboard from "./pages/UserDashboard";
import Pricing from "./pages/Pricing";
import Articles from "./pages/Articles";
import SingleArticle from "./pages/SingleArticle";
import TrainingPlans from "./pages/TrainingPlans";
import SingleTrainingPlan from "./pages/SingleTrainingPlan";
import NutritionPlans from "./pages/NutritionPlans";
import SingleNutritionPlan from "./pages/SingleNutritionPlan";
import TrainingLogs from "./pages/TrainingLogs";
import SingleTrainingLog from "./pages/SingleTrainingLog";
import Admin from "./pages/Admin";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Users from "./pages/Users";

const ADMIN = "admin"

export const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/login",
            element: <Login />
        }, {
            path: "/register",
            element: <Register />
        }, {
            path: "/pricing",
            element: <Pricing />
        },
        {
            path: "/my-journey",
            element: <ProtectedRoutes><MyJourney /></ProtectedRoutes>
        }, {
            path: "/dashboard",
            element: <ProtectedRoutes><UserDashboard /></ProtectedRoutes>
        }, {
            path: "/articles",
            element: <ProtectedRoutes><Articles /></ProtectedRoutes>
        }, {
            path: "/articles/:id",
            element: <ProtectedRoutes><SingleArticle /></ProtectedRoutes>
        }, {
            path: "/training-plans",
            element: <ProtectedRoutes><TrainingPlans /></ProtectedRoutes>
        }, {
            path: "/training-plans/:id",
            element: <ProtectedRoutes><SingleTrainingPlan /></ProtectedRoutes>
        }, {
            path: "/nutritions",
            element: <ProtectedRoutes><NutritionPlans /></ProtectedRoutes>
        }, {
            path: "/nutritions/:id",
            element: <ProtectedRoutes><SingleNutritionPlan /></ProtectedRoutes>
        }, {
            path: "/training-logs",
            element: <ProtectedRoutes><TrainingLogs /></ProtectedRoutes>
        }, {
            path: "/training-logs/:id",
            element: <ProtectedRoutes><SingleTrainingLog /></ProtectedRoutes>
        }, {
            path: "/admin",
            element: <ProtectedRoutes usersRole={ADMIN}><Admin /></ProtectedRoutes>
        }, {
            path: "/users",
            element: <ProtectedRoutes usersRole={ADMIN}><Users /></ProtectedRoutes>
        },
        {
            path: "/unauthorized",
            element: <Unauthorized />
        }, {
            path: "/notFound",
            element: <NotFound />
        },
    ]
}])
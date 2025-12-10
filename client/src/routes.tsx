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
            element: <MyJourney />
        }, {
            path: "/dashboard",
            element: <UserDashboard />
        }, {
            path: "/articles",
            element: <Articles />
        }, {
            path: "/articles/:id",
            element: <SingleArticle />
        }, {
            path: "/training-plans",
            element: <TrainingPlans />
        }, {
            path: "/training-plans/:id",
            element: <SingleTrainingPlan />
        }, {
            path: "/nutritions",
            element: <NutritionPlans />
        }, {
            path: "/nutritions/:id",
            element: <SingleNutritionPlan />
        }, {
            path: "/training-logs",
            element: <TrainingLogs />
        }, {
            path: "/training-logs/:id",
            element: <SingleTrainingLog />
        }, {
            path: "/admin",
            element: <Admin />
        }, {
            path: "/users",
            element: <SingleTrainingLog />
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
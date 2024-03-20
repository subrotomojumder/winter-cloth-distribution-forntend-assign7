import App from "@/App";
import PrivateRoute from "@/components/PrivateRoute";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import AllWinterClothes from "@/pages/AllWinterClothes";
import ClothesDetails from "@/pages/ClothesDetails";
import CommunityGratitude from "@/pages/CommunityGratitude";
import Home from "@/pages/Home";
import LeaderBoard from "@/pages/LeaderBoard";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import CreateWinterClothes from "@/pages/dashboard/CreateWinterClothes";
import Dashboard from "@/pages/dashboard/Dashboard";
import DashboardWinterClothes from "@/pages/dashboard/DashboardWinterClothes";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={"home"} />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "leaderboard",
        element: <LeaderBoard />,
      },
      {
        path: "community",
        element: <CommunityGratitude />,
      },
      {
        path: "winter-clothes",
        element: <AllWinterClothes />,
      },
      {
        path: "winter-clothes/:clotheId",
        element: <ClothesDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "winter-clothes",
        element: <DashboardWinterClothes />,
      },
      {
        path: "create-winter-clothes",
        element: <CreateWinterClothes />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;

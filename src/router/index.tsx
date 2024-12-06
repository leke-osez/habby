import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { appRoutes } from "./appRoutes";
import HomeLayout from "../pages/home/layout";
import DashboardPage from "../pages/dashboard/DashboardPage";
import HabitLayout from "../pages/habit/layout";
import HabitPage from "../pages/habit/HabitPage";

const router = createRoutesFromElements(
  <Route path={appRoutes.index}>
    <Route element={<HomeLayout />}>
      <Route path={appRoutes.index} element= {<Navigate replace to="/dashboard" />}/>
      <Route path={appRoutes.dashboard} element= {<DashboardPage />}/>
      
      <Route path={appRoutes.habit} element={<HabitLayout />}>
        <Route path=":id" element={<HabitPage />} />
        <Route index element={<Navigate replace to="/dashboard" />} />      
    </Route>

    </Route>
  </Route>
);

export default createBrowserRouter(router);

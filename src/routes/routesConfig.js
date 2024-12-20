import DefaultLayout from "~/layouts/DefaultLayout/DefaultLayout";
import LoginLayout from "~/layouts/LoginLayout/LoginLayout";
import NotFund from "~/pages/Error/NotFund/NotFund";
import Home from "~/pages/Home/Home";
import Login from "~/pages/Login/Login";
import Profile from "~/pages/User/Profile/Profile";

const routesConfig = [
  {
    path: "/",
    title: "home",
    name: "home",
    layout: DefaultLayout,
    component: Home,
    private: false,
  },
  {
    path: "/user/profile/:userId", // này sẽ là /user/profile/:userId chứ không phải User là layout
    title: "user_profile",
    name: "user-profile",
    component: Profile,
    private: true,
  },
  {
    path: "/login",
    title: "login",
    name: "login",
    layout: LoginLayout,
    component: Login,
    private: false,
  },
  {
    path: "*",
    title: "not_fund",
    name: "not-fund",
    layout: null,
    component: NotFund,
    private: false,
  },
];

export default routesConfig;

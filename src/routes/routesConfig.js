import { ROUTES } from "~/constants/routes";
import DefaultLayout from "~/layouts/DefaultLayout/DefaultLayout";
import LoginLayout from "~/layouts/LoginLayout/LoginLayout";
import Buy from "~/pages/Crypto/Buy/Buy";
import Download from "~/pages/Download/Download";
import NotFund from "~/pages/Error/NotFund/NotFund";
import Futures from "~/pages/Futures/Futures";
import Home from "~/pages/Home/Home";
import Login from "~/pages/Login/Login";
import Markets from "~/pages/Markets/Markets";
import Privacy from "~/pages/Privacy/Privacy";
import InputOTP from "~/pages/SignUp/InputOTP";
import InputPassword from "~/pages/SignUp/InputPassword";
import SignUp from "~/pages/SignUp/SignUp";
import Terms from "~/pages/Terms/Terms";
import Profile from "~/pages/User/Profile/Profile";

const routesConfig = [
  {
    path: ROUTES.HOME,
    title: "title_home",
    name: "home",
    layout: DefaultLayout,
    component: Home,
    private: false,
  },
  {
    path: "/user/profile/:userId",
    title: "user_profile",
    name: "user-profile",
    component: Profile,
    private: true,
  },
  {
    path: ROUTES.LOG_IN,
    title: "login",
    name: "login",
    layout: LoginLayout,
    component: Login,
    private: false,
  },
  {
    path: ROUTES.SIGN_UP,
    title: "sign_up",
    name: "sign-up",
    layout: LoginLayout,
    component: SignUp,
    private: false,
  },
  {
    path: ROUTES.SIGN_UP_OTP,
    title: "sign_up_opt",
    name: "sign-up-otp",
    layout: LoginLayout,
    component: InputOTP,
    private: false,
  },
  {
    path: ROUTES.SIGN_UP_PASSWORD,
    title: "sign_up_password",
    name: "sign-up-password",
    layout: LoginLayout,
    component: InputPassword,
    private: false,
  },
  {
    path: ROUTES.CRYPTO_BUY,
    title: "title_crypto_buy",
    name: "crypto",
    layout: DefaultLayout,
    component: Buy,
    private: false,
  },
  {
    path: ROUTES.TERMS,
    title: "terms",
    name: "terms",
    layout: DefaultLayout,
    component: Terms,
    private: false,
  },
  {
    path: ROUTES.PRIVACY,
    title: "privacy",
    name: "privacy",
    layout: DefaultLayout,
    component: Privacy,
    private: false,
  },
  {
    path: ROUTES.MARKETS,
    title: "market",
    name: "market",
    layout: DefaultLayout,
    component: Markets,
    private: false,
  },
  {
    path: ROUTES.DOWNLOAD,
    title: "download",
    name: "download",
    layout: DefaultLayout,
    component: Download,
    private: false,
  },
  {
    path: ROUTES.FUTURES,
    title: "futures",
    name: "futures",
    layout: DefaultLayout,
    component: Futures,
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

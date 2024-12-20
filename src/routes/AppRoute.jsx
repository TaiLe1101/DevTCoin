import { Fragment } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";
import DefaultLayout from "~/layouts/DefaultLayout/DefaultLayout";
import PrivateRoute from "./PrivateRoute";
import routesConfig from "./routesConfig";
import { useTranslation } from "react-i18next";

export default function AppRoutes() {
  const { t } = useTranslation();
  const isAuthenticated = false; // Thay đổi theo trạng thái thực tế
  const appName = "app_name";

  // Hàm đệ quy để render các route và route con
  const renderRoutes = (routes) =>
    routes.map(
      ({
        path,
        layout: Layout,
        component,
        title,
        name,
        private: isPrivate,
      }) => {
        // Nếu có layout thì sẽ render layout, nếu là null thì không render layout, nếu không có layout thì sẽ mặt định là DefaultLayout
        const EffectiveLayout =
          Layout === null ? Fragment : Layout || DefaultLayout;
        const Element = component;
        return (
          <Route
            key={name}
            path={path}
            element={
              isPrivate ? (
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <RouteWithTitle title={t(title)} appName={t(appName)}>
                    <EffectiveLayout>
                      <Element />
                    </EffectiveLayout>
                  </RouteWithTitle>
                </PrivateRoute>
              ) : (
                <RouteWithTitle title={t(title)} appName={t(appName)}>
                  <EffectiveLayout>
                    <Element />
                  </EffectiveLayout>
                </RouteWithTitle>
              )
            }
          ></Route>
        );
      }
    );

  return (
    <Router>
      <Routes>{renderRoutes(routesConfig)}</Routes>
    </Router>
  );
}

// Component để cập nhật title của trang
const RouteWithTitle = ({ title, appName, children }) => {
  const location = useLocation();

  useEffect(() => {
    // Cập nhật document.title khi location thay đổi
    document.title = `${appName} | ${title}`;
  }, [appName, location, title]);

  return <>{children}</>;
};

import { Provider } from "react-redux";

import store from "./app/store";
import AppRoutes from "./routes/AppRoute";
import "./i18n";

export default function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}

        <Route path="/profile">
          {authCtx.isLoggIn && <UserProfile />}
          {!authCtx.isLoggIn && <Redirect to="/auth" />}
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}
// để ngăn chặn người dùng có thể truy cập các trang như /profile bằng tay (nhập tay sửa đường dẫn) khi người dùng chưa đăng nhập, thì ta sẽ lồng <Route> đó vào trong điều kiện hiển thị
export default App;
// các token sẽ được lưu trữ trong trình duyệt khoảng 1h

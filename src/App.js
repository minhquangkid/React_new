import { Fragment } from "react";
import Counter from "./components/Counter";
import Headers from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";
// nhập npm install

// tiếp theo nhập npm install redux react-redux (vì redux nó được dùng ko chỉ trong react mà còn ở các ngôn ngữ khác nên ở đây ta chỉ cài cho react, vì vậy phải thêm vô react-redux)

//npm install @reduxjs/toolkit để cài toolkit
function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Headers />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      {isAuth && <Counter />}
    </Fragment>
  );
}

export default App;

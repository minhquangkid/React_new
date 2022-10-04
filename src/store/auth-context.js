import React, { useCallback, useEffect, useState } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  console.log(currentTime);
  const adjExpirationTime = new Date(expirationTime).getTime();
  console.log(adjExpirationTime);

  const remainingDuration = adjExpirationTime - currentTime;
  console.log(remainingDuration);
  return remainingDuration;
};
/* new Date().getTime() có nghĩa là :
The internal clock in JavaScript starts at midnight January 1, 1970.
getTime() returns the number of milliseconds (là ms chứ ko phải giây) since January 1, 1970:
*/

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  } // lệnh trên để kiểm tra xem token còn thời hạn sử dụng ko? nếu gần hết thì xóa nó

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

// 1m would be 60000 miliseconds - 3600 miliseconds are 3.6s. So you probaly want to use 60000 here

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;
  // đây là cách để chuyển đổi kiểu dữ liệu từ dạng string sang boolen, nếu token là string rỗng, thì !token là true, và !!token là false

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
    //nếu người dùng tự động thoát đăng nhập trước khi bộ đếm thời gian đếm xong thì ta sẽ xóa bộ đếm
  }, []);

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
    // setTimeout(logoutHandler, 3000);
    // hết khoảng thời gian remainingTime thì setTimeOut sẽ chạy hàm logoutHandler để đăng xuất người dùng
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(loginHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

// nếu có token tức là người dùng đã đăng nhập, và ngược lại

export default AuthContext;

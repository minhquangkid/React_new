import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        // "https://minhquangkid-3a415-default-rtdb.firebaseio.com/tasks.json"

        requestConfig.url,
        {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        }
      );
      // phải có đuôi là /tasks.json để tạo 1 dữ liệu json tên là task trên firebase, ta đặt tên khác thì sẽ ra tên khác
      // khi ko ghi method gì thì nó mặc định method là GET
      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);
  // dùng useCallBack , chỉ thay đổi khi applyData thay đổi
  return {
    isLoading,
    error,
    sendRequest,

    //sử dụng viết tắt của javascript, nếu viết đầy đủ nó sẽ như sau
    // isLoading: isLoading,
    // error: error,
    // sendRequest: sendRequest,
  };
};
// trả về 1 object
export default useHttp;

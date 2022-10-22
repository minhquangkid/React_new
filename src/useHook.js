import { useEffect } from "react";

const useApi = (handle) => {
  useEffect(() => {
    const promise = fetch(
      "https://6245b93d6b7ecf057c23abe2.mockapi.io/products?fbclid=IwAR1A4TZNLC0kmcQDrAful99bK4EntTQLIMfOgOJHxH3a4-B0CU2ZGWcmk6s"
    );

    promise
      .then((respone) => {
        return respone.json();
      })
      .then((data) => {
        console.log(data);
        handle(data);
        return data;
      })
      .catch((Error) => console.log(Error));

    console.log("chay useEffect");
  }, []);
};
export default useApi;

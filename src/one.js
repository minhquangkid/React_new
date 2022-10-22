import { useState } from "react";
import useApi from "./useHook";

const One = () => {
  const [show, setShow] = useState({ status: false, content: "" });

  const ChangeHandle = (e) => {
    setShow({ status: false, content: e.target.value });
    // setShow((prev) => {
    //   return {
    //     ...prev,
    //     content: e.target.value,
    //   };
    // });
  };

  const showHandle = () => {
    setShow((prev) => {
      return {
        status: true,
        content: prev.content,
      };
    });
  };

  const handle = (e) => {
    console.log(e);
  };

  useApi(handle);

  return (
    <div>
      <h1>{show.status && show.content}</h1>
      <input type="text" value={show.content} onChange={ChangeHandle} />
      <button onClick={showHandle}>Show</button>
    </div>
  );
};

export default One;

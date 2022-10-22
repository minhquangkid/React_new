import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Increase = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const show = useSelector((state) => state.num);

  return (
    <div>
      <h1>{show}</h1>
      <button onClick={() => dispatch({ type: "ADD" })}>+++++</button>
      <button onClick={() => dispatch({ type: "REMOVE" })}>---------</button>
      <br />
      <input type="number" ref={inputRef} />
      <button
        onClick={() =>
          dispatch({ type: "INCREASE", payload: inputRef.current.value })
        }
      >
        Increase
      </button>
    </div>
  );
};

export default Increase;

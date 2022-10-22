import ShowOff from "./ShowOff";
import { useReducer } from "react";
import { Link } from "react-router-dom";
const TestInput = () => {
  // cách dùng state bình thường

  // const [inputValue, setInputValue] = useState("Nothing");
  // const [inputSubmit, setInputSubmit] = useState("");

  // const test = (item) => {
  //   if (!item.includes("@")) {
  //     return { status: false, err: "phai co @" };
  //   }

  //   if (item.trim().length < 8) {
  //     return { status: false, err: "nhieu hon 8 ki tu" };
  //   }

  //   return { status: true, err: "" };
  // };

  // const inputHandle = (e) => {
  //   setInputValue(e.target.value);
  //   // console.log(e.target.value);
  // };

  // const clickHandle = () => {
  //   const result = test(inputValue);
  //   if (result.status) {
  //     setInputSubmit(inputValue);
  //     console.log(inputSubmit);
  //   } else console.log(result.err);
  // };

  // cách dùng reducer
  const init = {
    inputValue: "something",
    inputSubmit: "",
  };

  // action
  const CHANGE = "CHANGE";
  const SUBMIT = "SUBMIT";

  //reducer

  const reducer = (state, action) => {
    switch (action.type) {
      case CHANGE:
        console.log(action.payload);
        return {
          ...state,
          inputValue: action.payload,
        };
      case SUBMIT:
        console.log(action.payload);
        return {
          ...state,
          inputSubmit: action.payload,
        };
      default:
        return state;
    }
  };

  const [getValue, dispatch] = useReducer(reducer, init);

  const change = (e) => {
    return {
      type: CHANGE,
      payload: e.target.value,
    };
  };

  const submit = () => {
    return {
      type: SUBMIT,
      payload: getValue.inputValue,
    };
  };
  return (
    // <div>
    //   <ShowOff title={inputSubmit} />
    //   <input type="text" value={inputValue} onChange={inputHandle} />
    //   <button onClick={clickHandle}>Click</button>
    // </div>
    <div>
      <ShowOff title={getValue.inputSubmit} />
      <input
        type="text"
        value={getValue.inputValue}
        onChange={(e) => dispatch(change(e))}
      />
      <button onClick={() => dispatch(submit())}>Click</button>
      <br />
      <Link to="/home">
        <button>Home Page</button>
      </Link>
    </div>
  );
};

export default TestInput;

import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };
  // ta ko setIsEntering(false) trong hàm submitFormHandler mà để ở hàm riêng lẻ ngoài này vì state nó update theo cơ chế bất đồng bộ nên sẽ ko kịp sửa thành false trước khi được submit, nên ta cho event onClick của button chạy độc lập riêng lẻ trước khi form được submit

  const formFocusedHandler = () => {
    console.log("Focus");
    // khi 1 trong các thành phần trong form được focus (bất kì 1 input nào) thì sẽ kích hoạt
    setIsEntering(true);
  };

  // Prompt sẽ xuất ra message nếu when nhận giá trị true và người dùng rời khỏi trang hiện tại
  // tham số location ở đây chưa sài, nhưng nên tự tìm hiểu thêm công dụng của nó
  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave ? All your entered data will be lost !"
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={finishEnteringHandler}>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;

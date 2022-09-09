import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnterValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  // state dùng để kiểm soát liệu người dùng đã thêm trường đầu vào entered hay chưa và đã chạm vào input chưa

  const valueIsValue = validateValue(enteredValue);

  const hasError = !enteredValue && isTouched;

  const valueChangeHandler = (event) => {
    setEnterValue(event.target.value);
  };
  //thay enteredValue bằng event.target.value vì enteredValue nó sẽ nhận giá trị cũ do react sẽ lên lịch cập nhật state chứ ko render lại liền, do đó ko thông báo kịp cho người dùng họ đã nhập đúng
  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnterValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
  // khi key và value trong object giống nhau thì ta có thể viết tắt chúng như trên

  //  những cái khác như isTouched, valueIsValue chỉ là trung gian
};

export default useInput;

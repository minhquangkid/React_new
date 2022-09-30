import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();
  // useHistory cho phép truy cập vào lịch sử của web

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    // console.log(quoteData);
    sendRequest(quoteData);

    history.push("/quotes");
    // nếu dùng .push thì ta sẽ đẩy thêm 1 trang mới vào, nếu ta muốn quay lại trang cũ thì dùng nút back của trình duyệt, còn nếu dùng .replace thì nó thay thế trang mới vào hoàn toàn, lúc đó ta ko thể dùng nút back để về trang cũ được
    // sau khi gửi đi form và console.log(quoteData) thì trang web sẽ điều hướng ta đến http://localhost:3000/quotes
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;

import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};
// sortQuotes là 1 hàm sắp xếp có tác dụng sắp xếp 1 mảng các quotes theo ID

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  // useLocation() cho phép lấy thông tin trang web đang hiển thị
  // console.log(history);
  // console.log(location);
  // xem console.log để hiểu
  const changeSortingHandler = () => {
    history.push(
      `${location.pathname}?sort=${isSortingAscending ? "desc" : "asc"}`
    );

    // history.push({
    //   pathname: location.pathname,
    //   search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    // });

    // thay vì dùng 1 chuỗi dài như trên thì ta có thể nạp 1 object với các thuộc tính pathname và search cho history.push
  };

  //  location.pathname bằng với /quotes
  // ?sort=arc là tham số truy vấn Query, nếu  ko phần query này hay nó bị lỗi thì vẫn sẽ hiển thị trang '/quotes'
  // mỗi lần nhấn button là nó lại render lại trang, mặc dù trang ko thay đổi

  const queryParams = new URLSearchParams(location.search);
  // console.log(location.search);
  // URLSearchParams là hàm có sẵn trong javascript
  // console.log(queryParams);

  // console.log(queryParams.get("sort"));
  // trả về asc hoặc desc

  // tìm hiểu thêm về hàm URLSearchParams và get trong javascript
  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);
  // được chạy mỗi khi render lại

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
// sau khi đã sắp xếp và có query trong đường dẫn,thì khi ta gửi link có query đó cho người khác thì họ cũng nhận được trang đã sắp xếp như mình vậy

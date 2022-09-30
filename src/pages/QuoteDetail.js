import { Fragment, useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun !" },
  { id: "q2", author: "Maximilian", text: "Learning React is great" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  // useRouteMatch dùng để lấy ra url động, nhằm khi thay đổi url này thì ta ko phải thay đổi toàn bộ url liên quan giống nó
  // console.log(match);
  // xem kĩ console.log
  // math.path === "/quotes/:quoteId" === `/quotes/${param.quoteId}`
  const param = useParams();

  const { quoteId } = param;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  // const quote = DUMMY_QUOTES.find((quote) => quote.id === param.quoteId);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }
  if (!loadedQuote.text) {
    return <p>No quote found</p>;
  }
  // nếu ko có quote nào thì component QuoteDetail sẽ return đoạn <p>No quote found</p>

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

// Route thì dùng math.path
// còn Link thì dùng math.url , ko hiểu lắm ??
// 2 cái đều thay thế cho `/quotes/${param.quoteId}`

// ta có thể dùng cách này cũng được : <Route path='/quotes/:quoteId/comments'></Route>
export default QuoteDetail;

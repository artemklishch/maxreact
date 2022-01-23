import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "p1", author: "Max", text: "Learniong React is fun!" },
  { id: "p2", author: "Manu", text: "Learniong React is very fun!" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const quote = DUMMY_QUOTES.find((q) => q.id === params.quoteId);
  if (!quote) {
    return <p>No quote found</p>;
  }
  return (
    <div>
      <h1>Quote Detail page</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Open comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        {/* <Route path="/quotes/:quoteId/comments"> */}
        {/* <Route path={`/quotes/${params.quoteId}/comments`}> */}
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;

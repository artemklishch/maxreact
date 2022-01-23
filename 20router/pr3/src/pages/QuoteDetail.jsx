import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const match = useRouteMatch();
  const { quoteId } = useParams();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

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
    return <div className="centered focused">{error}</div>;
  }
  if (!loadedQuote.text) {
    return <p>No quote found</p>;
  }
  return (
    <div>
      <h1>Quote Detail page</h1>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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

import React from "react";

import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "p1", author: "Max", text: "Learniong React is fun!" },
  { id: "p2", author: "Manu", text: "Learniong React is very fun!" },
];

const AllQuates = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuates;

import React from "react";
import { BrowserRouter as Link, useLocation } from "react-router-dom";
import Widget from "../widget/Widget";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function WidgetBridge() {
  let query = useQuery();

  return (
    <Widget
      feedUrl={query.get("feed_url")}
      numberOfPosts={query.get("number_posts")}
      updateInterval={query.get("update_interval")}
    />
  );
}

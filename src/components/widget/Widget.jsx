import React, { useEffect, useState, useRef } from "react";
import ListLoading from "../list-loading/ListLoading.jsx";
import List from "../list/List.jsx";

export default function Widget(props) {
  const Loading = ListLoading(List);
  const { feedUrl, numberOfPosts, updateInterval } = props;
  const [appState, setAppState] = useState({
    posts: null,
    loading: false,
    lastId: null
  });
  const [timer, setTimer] = useState(0)

  // useEffect(() => {
  //   console.log("render the object for first time");
  //   setAppState({ loading: true });
  //   var apiUrl = "http://api.massrelevance.com/MassRelDemo/kindle.json";

  //   if (feedUrl)
  //     apiUrl = "http://api.massrelevance.com/MassRelDemo/kindle.json";
  //   if (numberOfPosts) apiUrl = `${apiUrl}?limit=${numberOfPosts}`;
  //   if (lastId) apiUrl = `${apiUrl}&start_id=${lastId}`;

  //   console.log("This will run every second!");
  //   console.log("lastId:" + lastId);

  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       //console.log(data);
  //       setAppState({ posts: data, loading: false });
  //       setLastId(data.pop().id);
  //       //setLastId(lastId+1)
  //       console.log(data.pop().id);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useInterval(() => {
    //console.log("This will run every second!");
    //console.log("lastId:" + lastId);

    setAppState({ loading: true });
    var apiUrl = "http://api.massrelevance.com/MassRelDemo/kindle.json";

    if (feedUrl)
      apiUrl = "http://api.massrelevance.com/MassRelDemo/kindle.json";
    if (numberOfPosts) {
      apiUrl = `${apiUrl}?limit=${numberOfPosts}`
    } else {
      apiUrl = `${apiUrl}?limit=5`
    }

    if (appState.lastId) apiUrl = `${apiUrl}&start_id=${appState.lastId}`;

    if (updateInterval) {
      setTimer(updateInterval)
    } else {
      setTimer(10000)
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setAppState({ posts: data, loading: false, lastId: data[data.length-1].id_str});
      })
      .catch((err) => console.log(err));
  }, timer);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    });

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }

      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }, [delay]);
  }


  return (
    <div>
      <Loading isLoading={appState.loading} posts={appState.posts} />
    </div>
  );
}

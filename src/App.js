import "./App.css";
import React from "react";
import Header from "./Header/Header";
import Posts from "./Posts/Posts";
export const MyContext = React.createContext();


function App() {
  // const [latestPosts, setLatestPosts] = React.useState([]);
  // const [postInfo, setPostInfo] = React.useState({});
  // const [comments, setComments] = React.useState([]);
  // const [time, setTime] = React.useState("");

  return (
    // <MyContext.Provider
    //   value={{
    //     latestPosts,
    //     setLatestPosts,
    //     postInfo,
    //     setPostInfo,
    //     comments,
    //     setComments,
    //     time,
    //     setTime,
    //   }}
    // >
      <div className="App">
        <Header />
        <Posts />
      </div>
    // </MyContext.Provider>
  );
}

export default App;

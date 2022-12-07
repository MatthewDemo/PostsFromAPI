import "./Post.css";
import React from "react";
// import { MyContext } from '../App'

function Post({ postNumber }) {
  const [postInfo, setPostInfo] = React.useState({});
  const [comments, setComments] = React.useState([]);
  const [time, setTime] = React.useState("");
// const { postInfo, setPostInfo, comments, setComments, time, setTime } = React.useContext(MyContext)

  React.useEffect(() => {

    fetch(`https://hacker-news.firebaseio.com/v0/item/${postNumber}.json?print=pretty`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setPostInfo(json);
        if (json.kids) {setComments(json.kids)};
        setTime(
          new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }).format(json.time*1000)
        );
      });
  }, []);

  console.log(postInfo)

  return (
    <li>
        <h1 className="title">{postInfo.title}</h1>
        <div className="score">{postInfo.score}</div>
        <div className="author">Posted by : {postInfo.by} on {time}</div>
        <div className="comments">{comments.length} comments ↘</div>{" "}
    </li>
  );
}

export default Post;

import Post from "../Post/Post";
import React from "react";
// import { MyContext } from '../App'

function Posts() {
  const [latestPosts, setLatestPosts] = React.useState([]);
// const { latestPosts, setLatestPosts } = React.useContext(MyContext)

  React.useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setLatestPosts(json);
      });
  }, []);

  setTimeout(function(){
    window.location.reload();
}, 60000)

  return (
    <ul>
      {latestPosts.map(postNumber => {
        return <Post key={postNumber} postNumber={postNumber} />;
      })}
    </ul>
  );
}

export default Posts;

/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import data from './data/data.json'

const App = () => {
  const [postNumber, setPostNumber] = useState(0)
  const [displayedPosts, setDisplayedPosts] = useState([]);

  useEffect(() => {
      const getInitialPosts = async () => {
        //   await axios({
        //     method: 'GET',
        //     url: 'https://pastebin.pl/view/raw/e1658aa0'
        //   })
        // const res = await fetch(data)
         console.log(data)
        //   .then(response => response.data.posts.filter((post, index) => index < 4))
        //   .then(data => {
        //     console.log(data);
        //   })
        }
          getInitialPosts();
        }, [displayedPosts])



  return (
    <>
      {displayedPosts && displayedPosts.map((post) => (
        <div key={post.title}>{post.title} <div><img style={{'width': '200px'}} src={post.thumb} /></div></div>
      ))}
      <button onClick={() => {setPostNumber(6)}}>tu</button>
    </>
  );
}

export default App;
*/
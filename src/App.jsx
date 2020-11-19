import React, { useEffect, useState } from 'react';

import data from './data/data.json'

const App = () => {
  const [postNumber, setPostNumber] = useState(6)
  const [displayedPosts, setDisplayedPosts] = useState([]);

  useEffect(() => {
      const getInitialPosts = () => {
         setDisplayedPosts(data.posts.filter((post, index) => index < postNumber))
        }
          getInitialPosts();
          console.log('loaded')
    }, [])

const addPost = () => {
    const postLength = displayedPosts.length;
    setDisplayedPosts([...displayedPosts, data.posts[postLength], data.posts[postLength + 1]])
    document.querySelector('.loading').innerHTML = ''
  }
  
  window.onscroll = async function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log('zxc')
        document.querySelector('.loading').innerHTML = 'Loading...'
        setTimeout(addPost, 300);
    }
};

  return (
    <>
      {displayedPosts && displayedPosts.map((post) => (
        post && <div key={post.title}>{post.title} <div><img style={{'width': '200px'}} src={post.thumb} /></div></div>
      ))}
      <div class="loading"></div>
    </>
  );
}

export default App;

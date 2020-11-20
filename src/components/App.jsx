import React, { useEffect, useState } from 'react';

import NewsItem from './NewsItem'
import NavigationBar from './NavigationBar'
import data from '../data.json'
import '../index.css'

const App = () => {
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [supportCount, setSupportCount] = useState(0);

  useEffect(() => {
      const getInitialPosts = () => {
         setDisplayedPosts(data.posts.filter((post, index) => index <= 5))
        }
          getInitialPosts();
          console.log('loaded')
    }, [])

const addPost = () => {
    const postLength = displayedPosts.length;
    if (supportCount === 5) {
      setDisplayedPosts([...displayedPosts, data.posts[postLength], data.posts[postLength + 1], {title: 'support'}])
      setSupportCount(0);
    } else {
      setDisplayedPosts([...displayedPosts, data.posts[postLength], data.posts[postLength + 1]])
      setSupportCount(supportCount + 1)
    }
    setChannelListLoading(false)
  }
  
  window.onscroll = function() {
    console.log(window.scrollY)
    console.log(window.innerHeight)
    console.log(document.body.offsetHeight)
    if ((window.innerHeight + Math.ceil(window.scrollY)) >= document.body.offsetHeight - 3) {
        console.log('zxc')
        setTimeout(addPost, 300);
        setChannelListLoading(true)
    }
};

const setChannelListLoading = (value) => {
  const spinner = document.getElementById('spinner');
  if (value) {
    spinner.style.visibility= 'visible';
  } else {
    spinner.style.visibility = 'hidden';
  }
};

  return (
    <>
    <NavigationBar />
    <div className="main">
      <div className="article-pool">
      {displayedPosts && displayedPosts.map((news) => (
        news && <NewsItem key={news.title} news={news} />
        ))}
      </div>
        <div style={{"marginRight": "320px"}}>
        <img className="oko-logo" alt="..." src="https://oko.press/app/themes/oko/assets/images/icons/logo.png"></img>
        </div>
    </div>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" id="spinner"></div>
        </div>
        </>
  );
}

export default App;

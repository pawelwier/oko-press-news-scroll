import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner'

const NewsList = ({ data }) => {
    const [displayedPosts, setDisplayedPosts] = useState([]);
    const [supportCount, setSupportCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      const getInitialPosts = () => {
         setDisplayedPosts(data.posts.filter((post, index) => index <= 5))
        }
          getInitialPosts();
          console.log('loaded')
    }, [])

  const addPost = () => {
      const postLength = displayedPosts.length;
      const updatedNews = [...displayedPosts, data.posts[postLength], data.posts[postLength + 1]];
      if (supportCount === 5) {
        setDisplayedPosts([...updatedNews, {title: 'support'}])
        setSupportCount(0);
      } else {
        setDisplayedPosts(updatedNews)
        setSupportCount(supportCount + 1)
      }
      setIsLoading(false)
  }
  

  window.onscroll = function() {
    if ((window.innerHeight + Math.ceil(window.scrollY)) >= document.body.offsetHeight - 3) {
        setTimeout(addPost, 500);
        setIsLoading(true)
    }
  };

  return (
      <div className="main">
          <div className="article-pool">
          {displayedPosts && displayedPosts.map((news) => (
              news && <NewsItem key={news.title} news={news} />
              ))}
          <Spinner isLoading={isLoading} />
          </div>
          <div className="oko-logo-container">
              <img className="oko-logo" alt="..." src="https://oko.press/app/themes/oko/assets/images/icons/logo.png"></img>
          </div>
      </div>
  )
}

export default NewsList

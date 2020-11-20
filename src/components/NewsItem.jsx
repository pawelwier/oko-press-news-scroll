import React from 'react'
import SupportOko from './SupportOko'

const NewsItem = ({ news }) => {
    if (news.title === 'support') {
        return <SupportOko />
    }
    return (
        <div className="card"><a href={news.url} target="_blank">
            <div className="container" style={{"display": "flex"}}>
            <img  href={news.url} src={news.thumb} className="article-img" alt="..." />
            <div className="card-body">
                <p className="article-title">{news.title}</p>
                <p className="article-text">{news.excerpt}</p>
                <div class="article-date">{news.date}</div>
            </div>
            </div>
        </a></div>
    )
}

export default NewsItem

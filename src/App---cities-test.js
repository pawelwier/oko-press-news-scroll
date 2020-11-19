import React, { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from 'react-window-infinite-loader';
import axios from 'axios';

import "./index.css";

let items = {};
let requestCache = {};

// const getUrl = (rows, start) => 'https://pastebin.pl/view/raw/e1658aa0';
const getUrl = (rows, start) => `https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&q=&rows=${rows}&start=${start}&facet=country`;

const Row = ({ index, style }) => {
  const item = items[index];
  return (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      {item ? item.accentcity : 'Loading...'}
    </div>
  );
};

const isItemLoaded = ({ index }) => !!items[index]; 

const loadMoreItems = (startIndex, endIndex) => {
  const key = [startIndex, endIndex].join(':');
  if (requestCache[key]) return;

  const length = endIndex - startIndex;
  const visibleRange = [...Array(length).keys()].map(
    x => x + startIndex
  )
  const itemsRetrieved = visibleRange.every(index => !!items[index]);

  if (itemsRetrieved) {
    requestCache[key] = key;
    return;
  }

  return fetch(
    getUrl(length, startIndex)
  )
  .then(
    response => response.json()
  )
  .then(
    data => {
      data.records.forEach((post, index) => {
        items[index + startIndex] = post.fields;
      })
    }
  )
  .catch(error => console.log("Error", error))
}

const App = () => {

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://pastebin.pl/view/raw/e1658aa0'
    })
    .then((response) => {
      console.log(response.data.posts)
    })
  }, [])

  return (
  
  <InfiniteLoader
    isItemLoaded={isItemLoaded}
    loadMoreItems={loadMoreItems}
    itemCount={1000}
  >{({ onItemsRendered, ref }) => (
  <List
      className="List"
      height={600}
      itemCount={10000}
      itemSize={35}
      width={300}
      ref={ref}
      onItemsRendered={onItemsRendered}
    >
      {Row}
    </List>
  )}
  </InfiniteLoader>
  )

}

export default App;

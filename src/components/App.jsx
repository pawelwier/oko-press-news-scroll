import React from 'react';

import NavigationBar from './NavigationBar'
import data from '../data.json'
import '../index.scss'
import NewsList from './NewsList';

const App = () => {

  return (
   <>
      <NavigationBar data={data} />
      <NewsList data={data} />
   </>
  );
}

export default App;

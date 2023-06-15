import { useState } from 'react';
import { BrowserRouter, Routes}

// useContext
import useAppContext from './store/AppContext';

import Card from './components/Card/Card';
import Layout from './components/Layout/Layout';

import logo from './logo.svg';
import './App.css';

function App() {
  const value = useAppContext();
  

  return (
      <div className="App">
        {/* <Layout> */}
        <Card title={value.store.counter} />
        <Card operator='+' func={value.actions.increment} />
        <Card operator='-' func={value.actions.decrement} />
        {/* </Layout> */}
      </div>
  );
}

export default App;
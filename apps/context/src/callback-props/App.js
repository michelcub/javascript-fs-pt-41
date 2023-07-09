import { useState } from 'react';

// useContext

import Card from './components/Card/Card';
import Layout from './components/Layout/Layout';

import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  // Callback props
  const increment = () => setCounter(prev => prev + 1);
  const decrement = () => setCounter(prev => prev - 1);

  return (
      <div className="App">
        {/* <Layout> */}
        <Card title={counter} />
        <Card operator='+' func={increment} />
        <Card operator='-' func={decrement} />
        {/* </Layout> */}
      </div>
  );
}

export default App;
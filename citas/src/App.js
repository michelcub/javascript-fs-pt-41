
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Example from './components/Example';



function App() {

  return (

    <BrowserRouter basename='/'>
      <Routes>
        <Route
          path='/'
          element={<Example 
                      text='Home'/>}
        />
         <Route
          path='/fav'
          element={<Example 
            text='Favorites'/>}
        />
         <Route
          path='/cita/:id'
          element={<Example 
            text='Id'/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

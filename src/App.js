import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Error404 } from './components/Error404';
import { ItemDetailList } from './components/ItemDetailList';
import { ItemList } from './components/ItemList';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path='/' element={<ItemList />} />
            <Route path='/character/:id' element={<ItemDetailList />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

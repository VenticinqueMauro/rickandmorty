import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Error404 } from './components/Error404';
import { ItemDetailList } from './components/ItemDetailList';
import { ItemList } from './components/ItemList';
import { Howl } from 'howler'
import sonidoFondo from './sound/sonidoAlien.mp3'
import { useEffect } from 'react';


function App() {

  const Sound = new Howl({
    src: sonidoFondo
  })

  useEffect(() => {
    Sound.play()
  }, [])

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

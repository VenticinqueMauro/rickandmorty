import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemDetailList } from './components/ItemDetailList';
import { ItemList } from './components/ItemList';
// import videoFondo from './video/videoFondo.mp4'
{/* <video src={videoFondo} autoPlay loop muted /> */}

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<ItemList />} />
          <Route path='/character/:id' element={<ItemDetailList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

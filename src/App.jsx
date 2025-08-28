import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={ <ItemListContainer mensaje ='Camina seguro en cada trayecto'/>} />
      <Router path='/item/:Playera' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<ErrorComponent/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

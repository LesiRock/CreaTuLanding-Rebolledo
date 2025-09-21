import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>
      <Route path='/' element={ <ItemListContainer mensaje ='Camina seguro en cada trayecto'/>} />
      <Route path='/category/:category' element={ <ItemListContainer mensaje ='Productos disponibles'/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<CartContainer/>}/>
      <Route path='/Checkout' element={<Checkout/>}/>
      <Route path='*' element={<ErrorComponent/>}/>
    </Routes>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App

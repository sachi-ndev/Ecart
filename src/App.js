import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Thenks from './pages/new/thenks';
import { ShopContextProvider } from './context/shopContext';
import Cartbuttons from './pages/cart/cartbuttons';

// import Btn from './button/btn';


// import 

function App() {
  return (
    <div className="App">
      <Cartbuttons>
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/thenks' element={<Thenks/>}/>
        </Routes>
      </Router>

      </ShopContextProvider>
      </Cartbuttons>

      {/* <Btn/> */}

    </div>
  );
}

export default App;

import './App.css';
import './css/style.scss';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Products from './pages/Products.jsx';
import Home from './pages/Home.jsx';
import CartProducts from './pages/CartProducts.jsx';
import FormCompra from './pages/FormCompra.jsx';
import ResumenCompra from './pages/ResumenCompra.jsx';
import NotFound from './pages/NotFound.jsx';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import {CartProvider} from './context/CartContext.js';

function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/products' component={Products}/>
              <Route exact path='/products/:id' component={ProductDetail}/>
              <Route exact path='/category' component={Products}/>
              <Route exact path='/category/:categoryId' component={Products}/>
              <Route exact path='/cart' component={CartProducts}/>
              <Route exact path='/formcompra' component={FormCompra}/>
              <Route exact path='/resumencompra' component={ResumenCompra}/>
              <Route path='*' component={NotFound}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

import './App.css';
import { Navbar } from './components/Navbar';
import Home from './components/Home';
import {Routes,Route} from "react-router-dom";
import Products from './components/Products';
import Product from './components/Product';
import Error404 from './components/Error404';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/products/undefined" element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;

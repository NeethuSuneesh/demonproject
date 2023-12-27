
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/product';


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>


        
        
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

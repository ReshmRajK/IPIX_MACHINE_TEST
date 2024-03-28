import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import CategoryList from './pages/CategoryList';
import UserList from './pages/UserList';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductListSingleView from './pages/ProductListSingleView';
import CategoryProductList from './pages/CategoryProductList';
// import CategoryProductListView from './pages/CategoryProductListView';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<ProductList/>}></Route>
        <Route path='/category' element={<CategoryList/>}></Route>
        <Route path='/user' element={<UserList/>}></Route>
        <Route path='/product_details' element={<ProductDetailsPage/>}></Route>
        <Route path='/single_product_list/:id' element={<ProductListSingleView/>}></Route>
        <Route path='/category_product_list/:id' element={<CategoryProductList/>}></Route>
        {/* <Route path='/category_product/:id' element={<CategoryProductListView/>}></Route> */}


      </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;

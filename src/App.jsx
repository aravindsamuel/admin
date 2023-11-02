import Home from './Home';
import SingleUser from './SingleUser';
import { HashRouter , Routes, Route } from 'react-router-dom';
import Users from './Users';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Orders from './Orders';
import Notification from './Notification';


function App() {
  return (
    <div>
      <HashRouter>
      <Routes>
      <Route>
        <Route path='/' element={<Home />} />

          <Route path='/users' element={<Users />} />
          <Route path="/users/:id" element={<SingleUser />} />

          <Route path='/products' element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />

          <Route path='/orders' element={<Orders />} />

          <Route path='/notification' element={<Notification />} />

      </Route>
      </Routes>
      </HashRouter>
    </div>  
  );
}

export default App;




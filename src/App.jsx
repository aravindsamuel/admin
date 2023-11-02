import Home from './Home';
import SingleUser from './SingleUser';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Users from './Users';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Orders from './Orders';
import Notification from './Notification';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/">
        <Route index element={<Home />} />

        <Route path="users">
          <Route index element={<Users />} />
          <Route path="/users/:id" element={<SingleUser />} />
        </Route>

        <Route path="products">
          <Route index element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Route>

        <Route path="orders">
          <Route index element={<Orders />} />
        </Route>

        <Route path="notification">
          <Route index element={<Notification />} />
        </Route>

      </Route>
      </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;




import {Routes,Route} from 'react-router-dom'
import './App.css';
import React from 'react';
import { OrderSummary } from './component/OrderSummary';
import {Home}  from './component/Home';

//import {About} from './component/About';
import { Navbar } from './component/Navbar';
import { Products } from './component/Products';
import { Nomatch } from './component/Nomatch';
import { FeaturedProduct } from './component/FeaturedProduct';
import { NewProduct } from './component/NewProduct';
import { Users } from './component/Users';
import {Userdetails} from './component/Userdetails';
import { Usersadmin } from './component/Usersadmin';
const LazyAbout=React.lazy(()=>import('./component/About'))
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<Nomatch />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProduct />} />
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<Userdetails />} />
        <Route path="users/admin" element={<Usersadmin />} />

        <Route path="*" element={<Nomatch />} />
      </Routes>
    </>
  );
}

export default App;

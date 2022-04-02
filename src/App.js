
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './compoents/Contact/Contact';
import Deals from './compoents/Deals/Deals';
import Header from './compoents/Header/Header';
import Home from './compoents/Home/Home';
import Phone from './compoents/Phone/Phone';
import Shop from './compoents/Shop/Shop';
import Review from './Review/Review';
import PhoneDetailse from './compoents/PhoneDetailse/PhoneDetailse';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path={'/'} element={<Home></Home>}></Route>
        <Route path={'/home'} element={<Home></Home>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='/deals' element={<Deals></Deals>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/phone/:name' element={<PhoneDetailse></PhoneDetailse>}></Route>
      </Routes>
    </div>
  );
}

export default App;

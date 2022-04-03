
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './compoents/Header/Header';
import Home from './compoents/Home/Home';
import Review from './Review/Review';
import PhoneDetailse from './compoents/PhoneDetailse/PhoneDetailse';
import Login from './compoents/Login/Login';
import NotFound from './compoents/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path={'/'} element={<Home></Home>}></Route>
        <Route path={'/home'} element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='/phone/:name' element={<PhoneDetailse></PhoneDetailse>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

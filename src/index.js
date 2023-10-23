import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HotelRoomList from './HotelRoomList';
import HotelDetail from './HotelInfo';
import HotelBookedList from './hotelBookedList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './HotelLoginForm';
import HotelSingUp from './HotelSingUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/hotelRoomsList' element={<HotelRoomList/>}></Route>
      <Route path='/hotelBookedHistory' element={<HotelBookedList/>}></Route>
      <Route path='/hotelDetails/:id' Component={HotelDetail}></Route>
      <Route path='/' element={<LoginForm/>}></Route>
      <Route path='/hotelSingUpPage' element={<HotelSingUp/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);


reportWebVitals();

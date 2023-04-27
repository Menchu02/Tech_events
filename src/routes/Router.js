import React from 'react'
import { Route, Routes } from 'react-router-dom';
import EventDetail from '../pages/EventDetail/EventDetail';
import MainPage from '../pages/MainPage/MainPage';
import Admin from '../components/Admin/Admin';


const Router = () => {
  return (
    <Routes>
        <Route element={<EventDetail />} path='/events/:id' />
        <Route element={<Admin />} path='/events/admin/' />
        <Route element={<MainPage />} path='/' />
    </Routes>
  )
}

export default Router
import React from 'react'
import { Route, Routes } from "react-router-dom";
import { LandingPageView } from '../features/LandingPages/LandingPageView';
import TokopediaView from '../features/Merchant/MerchantView';


const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<LandingPageView/>}></Route>
        <Route path='/:merchant' element={<TokopediaView/>}></Route>
    </Routes>
  )
}

export default AppRouter
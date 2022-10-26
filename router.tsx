import Login from './src/assets/pages/Login';
import React from 'react'
import {Route, Routes} from 'react-router-dom';
import {RoutePath} from './src/types/routes'

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login/>}/>
    </Routes>
  )
}

export default Router;
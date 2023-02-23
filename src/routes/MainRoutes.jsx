import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <MainLayout />} />
    </Routes>
  )
}

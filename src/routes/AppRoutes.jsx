



import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ExamsList from '../pages/ExamsList'
import MockList from '../pages/MockList'
import Login from '../pages/Login'
import MockTest from '../pages/MockTest'
import Result from '../pages/Result'
import MainLayout from '../Layouts/MainLayout'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import ProtectedRoute from '../components/ProtectedRoute'
import CategoryCard from '../components/CategoryCard'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <MainLayout><Home/></MainLayout>}/>
        <Route path='/examslist' element={ <ProtectedRoute><MainLayout><ExamsList /></MainLayout></ProtectedRoute>}/>
        <Route path="/examslist/:category" element={<ProtectedRoute><MainLayout><CategoryCard /></MainLayout></ProtectedRoute>}/>
        <Route path='/profile' element={<MainLayout><Profile/></MainLayout>}/>
        <Route path='/mocklist' element={<MainLayout><MockList/></MainLayout>}/>
        <Route path='/login' element={<MainLayout><Login/></MainLayout>}/>
        <Route path='/register' element={<MainLayout><Register/></MainLayout>}/>
        <Route path='/mocktest' element={<MainLayout><MockTest/></MainLayout>}/>
        <Route path='/result' element={<MainLayout><Result/></MainLayout>}/>
    </Routes>
  )
}

export default AppRoutes
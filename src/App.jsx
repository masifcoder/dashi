import './App.css'
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from './dashboard/DashboardLayout';
import Dashboard from './dashboard/Dashboard';
import Login from './pages/Login';
import Notfound from './pages/Notfound';
import Products from './dashboard/Products';




function App() {

  return (
    <>

      <Routes>

        <Route path='/' element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='products' element={<Products />} />
        </Route>


        <Route path='/login' element={<Login />} />

        <Route path='*' element={<Notfound />} />

      </Routes>
    </>
  )
}

export default App

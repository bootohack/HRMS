import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import EmployeeForm from './pages/employee' 
import Dashboard from './pages/dashboard'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />}>
        <Route path="employee" element={<EmployeeForm />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App

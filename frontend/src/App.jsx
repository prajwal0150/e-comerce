import Header from './components/header'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import ForgotPassword from './pages/ForgotPassword'
import Login from './pages/Login'
import Register from './pages/register'
import ContactUs from './pages/ContactUs'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
const App = () => {
  return (  
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/dashboard"} element={<Dashboard/>}/>
      <Route path={"/forgot-password"} element={<ForgotPassword/>}/>
      <Route path={"/login"} element={<Login/>}/>
      <Route path={"/register"} element={<Register/>}/>
      <Route path={"/contact"} element={<ContactUs/>}/>

      

    </Routes>
    </BrowserRouter>
  );
}

export default App;

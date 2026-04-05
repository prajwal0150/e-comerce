import Header from './components/header'
import Home from './pages/Home'
import ForgotPassword from './pages/ForgotPassword'
import Login from './pages/Login'
import Register from './pages/register'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
const App = () => {
  return (  
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/forgot-password"} element={<ForgotPassword/>}/>
      <Route path={"/login"} element={<Login/>}/>
      <Route path={"/register"} element={<Register/>}/>

      

    </Routes>
    </BrowserRouter>
  );
}

export default App;

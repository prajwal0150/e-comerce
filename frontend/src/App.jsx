import Header from './components/header'
import Home from './pages/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
const App = () => {
  return (  
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>

      

    </Routes>
    </BrowserRouter>
  );
}

export default App;

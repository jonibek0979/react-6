import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import { useEffect } from 'react';

function App() {
  const nawigat = useNavigate()
  const location = useLocation().pathname
  useEffect(() => {
    if (!window.sessionStorage.getItem('tokin')) {
      nawigat('/login')
    }
  }, [location])
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>


    </div>
  );
}

export default App;


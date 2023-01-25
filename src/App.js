
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nadbar from './components/Nadbar';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
function App() {
  return (
  <>
  <AuthContextProvider>
    <Nadbar/>
    <Routes>
      <Route path='/'element={<Home></Home>}/> 
      <Route path='/login'element={<Login></Login>}/>
      <Route path='/signup'element={<SignUp></SignUp>}/>
      <Route path='/account'element={<ProtectedRoute> <Account></Account></ProtectedRoute>}/>
    </Routes>
    </AuthContextProvider>
    
  </>
  );
}

export default App;

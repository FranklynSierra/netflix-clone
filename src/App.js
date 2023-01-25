
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nadbar from './components/Nadbar';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
function App() {
  return (
  <>
  <AuthContextProvider>
    <Nadbar/>
    <Routes>
    <Route path='/*'element={<NotFound/>}/>
      <Route path='/netflix'element={<Home></Home>}/> 
      <Route path='/'element={<Home></Home>}/> 
      <Route path='/netflix-login'element={<Login></Login>}/>
      <Route path='/netflix-signup'element={<SignUp></SignUp>}/>
      <Route path='/netflix-account'element={<ProtectedRoute> <Account></Account></ProtectedRoute>}/>
    </Routes>
    </AuthContextProvider>
    
  </>
  );
}

export default App;

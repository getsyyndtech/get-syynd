import './assets/global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/signup';
import HomePage from './pages/home/homePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<SignUpPage />} path='/sign-up' />
      </Routes>
    </Router>
  );
}

export default App;
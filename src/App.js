import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import ServicePage from './components/ServicePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/service" element={<ServicePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

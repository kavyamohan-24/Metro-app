import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import ServicePage from './components/ServicePage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/service" element={<ServicePage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

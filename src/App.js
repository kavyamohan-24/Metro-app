import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Chm252 from './chm252';
function App() {
  document.title = 'CHM';
  <head>
  <link rel="icon" type="image/png" href="./cute.jpg" sizes="32x32"/>
  </head>
  return (
    <BrowserRouter>
  <Routes>
    <Route path = '/' element = {<Chm252/>}/>;
  </Routes>
  </BrowserRouter>
  );
}

export default App;

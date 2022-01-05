import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Agregar from './components/Agregar/Agregar';
import Navbar from './components/Navbar/Navbar';
import Productos from './components/Productos';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Agregar />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </Router>
  );
}

export default App;

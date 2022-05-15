import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Menu from './components/Menu';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

import Home from './components/Home';
import Status from './components/Status';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/menu" element={
            <Menu />
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/status" element={<Status />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="not-found" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

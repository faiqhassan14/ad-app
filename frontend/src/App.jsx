import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import CreateAd from './pages/CreateAd';
import Auth from './pages/Auth';
import Navbar from './components/Navbar';

export default function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Feed/>} />
          <Route path="/create" element={<CreateAd/>} />
          <Route path="/auth" element={<Auth/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

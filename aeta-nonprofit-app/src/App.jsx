import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main style={{ flex: 1 }}>
        {activePage === 'home' ? <Home /> : <About />}
      </main>
      <Footer />
    </div>
  );
}
export default function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-logo">🌾 Porac Aeta Heritage Initiative</div>
        <div className="nav-links">
          <button 
            className={activePage === 'home' ? 'active' : ''} 
            onClick={() => setActivePage('home')}
          >
            Home
          </button>
          <button 
            className={activePage === 'about' ? 'active' : ''} 
            onClick={() => setActivePage('about')}
          >
            About Us
          </button>
        </div>
      </div>
    </nav>
  );
}
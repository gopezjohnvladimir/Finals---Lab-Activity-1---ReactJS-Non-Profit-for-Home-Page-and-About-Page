export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Porac Aeta Heritage Initiative. All rights reserved.</p>
        <p style={{ marginTop: '5px', fontSize: '0.8rem', color: '#74c69d' }}>
          Advocating for indigenous empowerment, cultural preservation, and sustainable community development in Porac, Pampanga.
        </p>
      </div>
    </footer>
  );
}
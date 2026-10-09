export default function About() {
  const teamMembers = [
    { name: "John Gopez", role: "Project Lead / Developer" },
    { name: "Kyla Domingo", role: "Researcher & Content Strategist" },
    { name: "Rafael Garcia", role: "UI/UX Designer" },
    { name: "Marc Manalo", role: "Community Advocacy Lead" },
    { name: "Lance Quan", role: "Frontend Developer" }
  ];

  return (
    <div className="container section">
      <h2 className="section-title">About Our Initiative</h2>
      
      <div className="card" style={{ marginBottom: '40px' }}>
        <h3>Project Purpose</h3>
        <p>
          This website was created as a advocacy platform dedicated to highlighting the socio-cultural heritage and local community development initiatives for the Aeta indigenous people in Porac, Pampanga. Our goal is to promote cultural awareness, encourage educational outreach, and raise support for indigenous rights.
        </p>
      </div>

      <h2 className="section-title">Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => {
          const initials = member.name.split(' ').map(n => n[0]).join('');
          return (
            <div key={index} className="team-card">
              <div className="avatar">{initials}</div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
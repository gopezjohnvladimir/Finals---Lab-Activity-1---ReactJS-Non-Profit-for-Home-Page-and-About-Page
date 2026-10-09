export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Empowering the Aeta Mag-antsi Community of Porac</h1>
          <p>
            Preserving indigenous heritage, promoting sustainable livelihoods, and fostering educational equity for the Aeta communities in Porac, Pampanga.
          </p>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">Key Focus Areas</h2>
        <div className="grid">
          <div className="card">
            <h3> Ancestral Domain Livelihoods</h3>
            <p>
              Supporting sustainable agroforestry, organic farming, and fair trade distribution of local ancestral domain produce such as bananas, root crops, and native honey.
            </p>
          </div>
          <div className="card">
            <h3> Education & Literacy Access</h3>
            <p>
              Partnering with local indigenous schools in ancestral villages like Villa Maria and Inararo to provide learning supplies, youth mentorship, and cultural preservation programs.
            </p>
          </div>
          <div className="card">
            <h3> Healthcare & Well-being</h3>
            <p>
              Facilitating mobile health checkups, clean water initiatives, and combining traditional herbal medicine practices with modern healthcare support.
            </p>
          </div>
        </div>
      </section>

      <section className="section container" style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '40px 25px' }}>
        <h2 className="section-title">About the Aeta Community in Porac</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto 15px auto', textAlign: 'justify' }}>
          The Aeta Mag-antsi and Mag-indi indigenous communities of Porac, Pampanga, are among the earliest inhabitants of the Philippines. Residing along the slopes of Mt. Pinatubo, they possess rich traditional knowledge, deep spiritual connection to their ancestral land (<i>CADT 123</i>), and vibrant cultural customs.
        </p>
        <p style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'justify' }}>
          Our non-profit project works to bridge resources and raise awareness for their self-determination, land rights, and cultural heritage preservation in a modernizing world.
        </p>
      </section>
    </div>
  );
}
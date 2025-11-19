const { useState, useEffect } = React;

function SkillCard() {
  const [angle, setAngle] = useState(0);

  const words = [
    "Versatile",
    "Analytical",
    "Adaptable",
    "Collaborative",
    "Innovative",
    "Reliable",
    "Curious"
  ];

  useEffect(() => {
    const interval = setInterval(() => setAngle(a => a + 0.5), 16);
    return () => clearInterval(interval);
  }, []);

  const cardContainer = {
    width: '100%',
    height: '250px',
    perspective: '1000px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const cardStyle = {
    width: '250px',
    height: '250px',
    borderRadius: '50%',  // Circular like Pip-Boy radar
    transformStyle: 'preserve-3d',
    transform: `rotateY(${angle}deg)`,
    transition: 'transform 0.1s linear',
    position: 'relative',
    boxShadow: '0 0 20px #00ff00, 0 0 40px #00ff00 inset',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0,0,0,0.8)',
    border: '2px solid #00ff00',
    animation: 'pulseGlow 2s infinite alternate'
  };

  const faceStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '50%',
    color: '#00ff00',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '10px',
    fontWeight: 'bold',
    flexDirection: 'column'
  };

  const frontStyle = {
    ...faceStyle,
    fontSize: '1.2rem',
    border: '2px solid #00ff00',
    boxShadow: '0 0 15px #00ff00, 0 0 30px #00ff00 inset',
    background: 'rgba(0,0,0,0.9)'
  };

  const backStyle = {
    ...faceStyle,
    transform: 'rotateY(180deg)',
    fontSize: '1rem',
    gap: '5px'
  };

  return React.createElement('div', { style: cardContainer },
    React.createElement('div', { style: cardStyle },
      React.createElement('div', { style: frontStyle }, "Raj's Skills"),
      React.createElement('div', { style: backStyle },
        words.map(word => React.createElement('div', { key: word }, word))
      )
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(React.createElement(SkillCard));



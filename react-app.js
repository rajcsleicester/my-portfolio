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
    height: '200px',
    perspective: '1000px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const cardStyle = {
    width: '250px',
    height: '150px',
    borderRadius: '20px',
    transformStyle: 'preserve-3d',
    transform: `rotateY(${angle}deg)`,
    position: 'relative',
    boxShadow: '0 0 30px #00eaff, 0 0 60px #007bff inset'
  };

  const faceStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '20px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '10px',
    fontWeight: 'bold'
  };

  const frontStyle = {
    ...faceStyle,
    background: 'linear-gradient(135deg,#00eaff,#007bff)',
    fontSize: '1.2rem'
  };

  const backStyle = {
    ...faceStyle,
    background: 'linear-gradient(135deg,#007bff,#00eaff)',
    transform: 'rotateY(180deg)',
    flexDirection: 'column',
    fontSize: '1rem'
  };

  return React.createElement('div', { style: cardContainer },
    React.createElement('div', { style: cardStyle },
      React.createElement('div', { style: frontStyle }, "Raj's Skills"),
      React.createElement('div', { style: backStyle },
        words.map(word => React.createElement('div', { key: word, style: { margin: '4px 0' } }, word))
      )
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(React.createElement(SkillCard));



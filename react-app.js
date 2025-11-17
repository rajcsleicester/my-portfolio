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

  const cardStyle = {
    width: '250px',
    height: '150px',
    borderRadius: '20px',
    transformStyle: 'preserve-3d',
    transform: `rotateY(${angle}deg)`,
    boxShadow: '0 0 30px #00eaff, 0 0 60px #007bff inset',
    textAlign: 'center',
    position: 'relative',
  };

  const faceStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    lineHeight: '1.4rem',
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
    fontSize: '1rem',
    flexDirection: 'column'
  };

  return React.createElement('div', {
    style: {
      width: '100%',
      height: '200px',
      perspective: '1000px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
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



const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(React.createElement(SkillCard));

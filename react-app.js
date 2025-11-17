const { useState, useEffect } = React;

function SkillCard() {
  const [angle, setAngle] = useState(0);

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
    fontWeight: 'bold',
    fontSize: '1.2rem',
    borderRadius: '20px',
    color: 'white'
  };

  const frontStyle = {
    ...faceStyle,
    background: 'linear-gradient(135deg,#00eaff,#007bff)',
  };

  const backStyle = {
    ...faceStyle,
    background: 'linear-gradient(135deg,#007bff,#00eaff)',
    transform: 'rotateY(180deg)',
    padding: '10px',
    fontSize: '1rem',
    lineHeight: '1.4rem'
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
      React.createElement('div', { style: frontStyle }, "Raj's Skills Card"),
      React.createElement('div', { style: backStyle },
        "Versatile, Analytical, Adapatable, Collaborative, Innovative, Reliable, Curious"
      )
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(React.createElement(SkillCard));


const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(React.createElement(SkillCard));

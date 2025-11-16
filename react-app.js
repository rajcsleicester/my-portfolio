const { useState, useEffect } = React;

function SkillCard() {
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setAngle(a => a + 0.5), 16);
        return () => clearInterval(interval);
    }, []);

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
    React.createElement('div', {
        style: {
            width: '250px',
            height: '150px',
            background: 'linear-gradient(135deg,#00eaff,#007bff)',
            borderRadius: '20px',
            transformStyle: 'preserve-3d',
            transform: `rotateY(${angle}deg)`,
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 0 30px #00eaff, 0 0 60px #007bff inset',
            textAlign: 'center'
        }
    }, "Raj's Skills Rotating Card"));
}

const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(React.createElement(SkillCard));

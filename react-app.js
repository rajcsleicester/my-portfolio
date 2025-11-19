const { useState, useEffect } = React;

function FuturisticLoader() {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");

  const lines = [
    "Initializing Raj Jethwa...",
    "Loading Full-Stack Systems...",
    "Establishing Secure Connection...",
    "Launching Portfolio Interface..."
  ];

  useEffect(() => {
    let line = 0;
    let char = 0;

    const interval = setInterval(() => {
      if (line < lines.length) {
        const full = lines[line];
        if (char < full.length) {
          setText(prev => prev + full[char]);
          char++;
        } else {
          setText(prev => prev + "\n");
          char = 0;
          line++;
        }
      } else {
        clearInterval(interval);
        setTimeout(() => setShow(false), 700);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  return React.createElement("pre", { className: "futuristic-loader" }, text);
}

function Menu() {
  return React.createElement("div", { className: "menu" }, "Menu");
}

function SkillCard() {
  const [angle, setAngle] = useState(0);
  const words = ["Versatile","Analytical","Adaptable","Collaborative","Innovative","Reliable","Curious"];

  useEffect(() => {
    const interval = setInterval(() => setAngle(a => a + 0.5), 16);
    return () => clearInterval(interval);
  }, []);

  return React.createElement(
    "div",
    { className: "skill-card-container" },
    React.createElement(
      "div",
      { className: "skill-card", style: { transform: `rotateY(${angle}deg)` } },
      React.createElement("div", { className: "skill-card-face skill-card-front" }, "Raj's Skills"),
      React.createElement(
        "div",
        { className: "skill-card-face skill-card-back" },
        words.map(word => React.createElement("div", { key: word }, word))
      )
    )
  );
}

function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(FuturisticLoader),
    React.createElement(Menu),
    React.createElement(SkillCard)
  );
}

const root = ReactDOM.createRoot(document.getElementById("react-root"));
root.render(React.createElement(App));


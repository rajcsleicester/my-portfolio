const { useState, useEffect } = React;

/* ================================
   FUTURISTIC FULL-PAGE LOADER
================================= */

function FuturisticLoader({ onFinish }) {
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
        // Keep loader visible 1.5s then hide
        setTimeout(() => {
          if (onFinish) onFinish();
        }, 1500);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return React.createElement(
    "div",
    {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        color: "#00eaff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "monospace",
        fontSize: "1.2rem",
        whiteSpace: "pre-wrap",
        padding: "20px",
        zIndex: 99999
      }
    },
    text
  );
}

/* ================================
   MENU BUTTON WITH FADE IN
================================= */

function MenuButton({ show }) {
  const [open, setOpen] = useState(false);

  const buttonStyle = {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "10px 15px",
    background: "#000000aa",
    border: "2px solid #00eaff",
    color: "#00eaff",
    fontFamily: "monospace",
    fontWeight: "bold",
    cursor: "pointer",
    zIndex: 10000,
    transition: "all 0.5s",
    opacity: show ? 1 : 0
  };

  const menuStyle = {
    position: "fixed",
    top: "60px",
    right: "20px",
    background: "#000000dd",
    border: "2px solid #00eaff",
    padding: "10px 15px",
    display: open ? "flex" : "none",
    flexDirection: "column",
    gap: "10px",
    fontFamily: "monospace",
    zIndex: 9999,
    opacity: open ? 1 : 0,
    transition: "opacity 0.3s"
  };

  const linkStyle = {
    color: "#00eaff",
    cursor: "pointer",
    textDecoration: "none"
  };

  const sections = ["home", "about", "skills", "projects", "contact"];

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      {
        style: buttonStyle,
        onClick: () => setOpen(prev => !prev)
      },
      open ? "Close Menu" : "Menu"
    ),
    React.createElement(
      "div",
      { style: menuStyle },
      sections.map(section =>
        React.createElement(
          "span",
          {
            key: section,
            style: linkStyle,
            onClick: () => {
              const el = document.getElementById(section);
              if (el) el.scrollIntoView({ behavior: "smooth" });
              setOpen(false);
            }
          },
          section.charAt(0).toUpperCase() + section.slice(1)
        )
      )
    )
  );
}

/* ================================
   SKILLCARD
================================= */

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
    width: "100%",
    height: "200px",
    perspective: "1000px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px"
  };

  const cardStyle = {
    width: "250px",
    height: "150px",
    borderRadius: "20px",
    transformStyle: "preserve-3d",
    transform: `rotateY(${angle}deg)`,
    transition: "transform 0.1s linear",
    position: "relative",
    boxShadow: "0 0 30px #00eaff, 0 0 60px #007bff inset"
  };

  const faceStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "20px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "10px",
    fontWeight: "bold"
  };

  const frontStyle = {
    ...faceStyle,
    background: "linear-gradient(135deg,#00eaff,#007bff)",
    fontSize: "1.2rem"
  };

  const backStyle = {
    ...faceStyle,
    background: "linear-gradient(135deg,#007bff,#00eaff)",
    transform: "rotateY(180deg)",
    flexDirection: "column",
    fontSize: "1rem"
  };

  return React.createElement(
    "div",
    { style: cardContainer },
    React.createElement(
      "div",
      { style: cardStyle },
      React.createElement("div", { style: frontStyle }, "Raj's Skills"),
      React.createElement(
        "div",
        { style: backStyle },
        words.map(word =>
          React.createElement("div", { key: word }, word)
        )
      )
    )
  );
}

/* ================================
   APP ROOT
================================= */

function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);

  return React.createElement(
    React.Fragment,
    null,
    !loaderFinished &&
      React.createElement(FuturisticLoader, { onFinish: () => setLoaderFinished(true) }),
    React.createElement(MenuButton, { show: loaderFinished }),
    React.createElement(SkillCard)
    // All other sections in index.html remain
  );
}

const root = ReactDOM.createRoot(document.getElementById("react-root"));
root.render(React.createElement(App));



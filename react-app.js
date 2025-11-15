// A simple React component showing dynamic UI

function App() {
    const [count, setCount] = React.useState(0);

    return React.createElement(
        "div",
        {
            style: {
                textAlign: "center",
                padding: "20px",
                fontSize: "18px",
                color: "#00eaff"
            }
        },
        [
            React.createElement(
                "h3",
                { key: 1, style: { fontSize: "24px", marginBottom: "10px" } },
                "Interactive React Component"
            ),
            React.createElement(
                "p",
                { key: 2 },
                "This small widget is powered entirely by React."
            ),
            React.createElement(
                "button",
                {
                    key: 3,
                    onClick: () => setCount(count + 1),
                    style: {
                        padding: "10px 18px",
                        borderRadius: "10px",
                        border: "none",
                        background: "linear-gradient(120deg,#008cff,#00eaff)",
                        color: "white",
                        fontWeight: "700",
                        cursor: "pointer",
                        marginTop: "10px"
                    }
                },
                `Clicked ${count} times`
            )
        ]
    );
}

// Render into the <div id="react-root"></div> in your HTML
ReactDOM.render(
    React.createElement(App),
    document.getElementById("react-root")
);

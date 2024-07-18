const App = (props) => {
  // console.log("props", props);
  const { initialButtonText } = props;
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [buttonColor, setButtonColor] = React.useState("");
  // console.log(buttonColor);

  const onButtonClick = () => {
    setButtonText("Hello from React");
    // console.log("button text", buttonText);
    setButtonColor("green-btn");
    // setButtonColor(`green-btn ${Math.random()}`);
  };

  return (
    <div className="app">
      <button className={buttonColor} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" />);

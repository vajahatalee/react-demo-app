import LandingMessage from "./LandingMessage";

function App() {
  return (
    <>
      <LandingMessage isLoggedIn={true} userName="Tommy" />
      <LandingMessage isLoggedIn={true} />
    </>
  );
}

export default App;

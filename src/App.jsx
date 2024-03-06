import User from "./User";

function App() {
  return (
    <>
      <div>
        <User name="Ali" age={33} isStudent={false} />
      </div>
      <div>
        <User name="Zaid" age={7} isStudent={true} />
      </div>
      <div>
        <User name="Ismael" age={3} isStudent={true} />
      </div>
      <div>
        <User />
      </div>
    </>
  );
}

export default App;

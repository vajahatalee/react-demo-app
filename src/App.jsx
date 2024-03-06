import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 4, name: "pear", calories: 25 },
    { id: 2, name: "banana", calories: 100 },
    { id: 3, name: "coconut", calories: 145 },
  ];

  const vegetables = [
    { id: 1, name: "potatoes", calories: 110 },
    { id: 4, name: "spinanch", calories: 15 },
    { id: 2, name: "corn", calories: 50 },
    { id: 3, name: "brocculi", calories: 70 },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} title="Fruits"></List>}
      {vegetables.length > 0 && (
        <List items={vegetables} title="Vegetables"></List>
      )}
    </>
  );
}

export default App;

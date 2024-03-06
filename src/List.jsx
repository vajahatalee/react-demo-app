function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 4, name: "pear", calories: 25 },
    { id: 2, name: "banana", calories: 100 },
    { id: 3, name: "coconut", calories: 145 },
  ];

  //ALPHABETICAL SORT
  //fruits.sort((a, b) => a.name.localeCompare(b.name));
  //REVERSE ALPHABETICAL SORT
  //fruits.sort((a, b) => b.name.localeCompare(a.name));

  //NUMERIC SORT
  //fruits.sort((a, b) => a.calories - b.calories);
  //NUMERIC SORT REVERSE
  //fruits.sort((a, b) => b.calories - a.calories);

  //FILTER ONLY HIGH CAL FRUITS
  //const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);
  //FILTER ONLY LOW CAL FRUITS
  //const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  const listOfFruits = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} &nbsp; <b>{fruit.calories}</b>
    </li>
  ));

  return <ol>{listOfFruits}</ol>;
}
export default List;

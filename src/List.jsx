import PropTypes from "prop-types";
function List(props) {
  const listOfItems = props.items;
  const category = props.title;

  const itemList = listOfItems.map((item) => (
    <li key={item.id}>
      {item.name} &nbsp; <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h1 className="list-heading">{category}</h1>
      <ol className="list-items">{itemList}</ol>
    </>
  );
}
List.defaultProps = { title: "Category", items: [] };
List.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
export default List;

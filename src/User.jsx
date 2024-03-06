import PropTypes from "prop-types";

function User(props) {
  const isStudent = props.isStudent;
  console.log("isStudent: " + props.isStudent);
  return (
    <>
      <div className="student">
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Student:{props.isStudent ? "yes" : "no"}</p>
      </div>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

User.defaultProps = {
  name: "TestUser",
  age: 0,
  isStudent: false,
};

export default User;

import PropTypes from "prop-types";

/* To test conditional rendering*/
function LandingMessage(props) {
  const welocome_user = <h1>Welcome! {props.userName}</h1>;
  const invalid_user = <h1>Please log in!</h1>;
  return props.isLoggedIn ? welocome_user : invalid_user;
}
LandingMessage.propTypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
};
LandingMessage.defaultProps = {
  isLoggedIn: false,
  userName: "Guest",
};

export default LandingMessage;

import AuthContext from "./AuthContext";
import PropTypes from "prop-types";

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;

import { useSelector } from "react-redux";
import classes from "./Header.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store";

const getAuthState = (state) => state.authReducer;

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(getAuthState);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

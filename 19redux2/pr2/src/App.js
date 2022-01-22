import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

const getUiState = (state) => state.uiReducer;
const getCartState = (state) => state.cartReducer;
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const { cartIsVisible, notification } = useSelector(getUiState);
  const cartData = useSelector(getCartState);
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cartData.changed) {
      dispatch(sendCartData(cartData));
    }
  }, [cartData, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

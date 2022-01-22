import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const getCartState = (state) => state.cartReducer;

const Cart = (props) => {
  const { items } = useSelector(getCartState);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((product) => (
          <CartItem
            key={product.id}
            item={{
              title: product.name,
              quantity: product.quantity,
              total: product.totalPrice,
              price: product.price,
              id: product.id,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;

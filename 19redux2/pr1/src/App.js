import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

const getUiState = (state) => state.uiReducer;

function App() {
  const data = useSelector(getUiState);
  console.log(data);
  const { cartIsVisible } = useSelector(getUiState);
  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

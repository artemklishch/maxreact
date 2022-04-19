import { useDeferredValue } from "react";

function ProductList({ products }) {
  const defferedProducts = useDeferredValue(products);
  return (
    <ul>
      {defferedProducts.map((product) => (
        <li>{product}</li>
      ))}
    </ul>
  );
}

export default ProductList;

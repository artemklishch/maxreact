import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  // const navigate = useNavigate();
  // navigate("/welcome");
  // navigate(-1);
  // navigate("/welcome", { replace: true });
  return (
    <section>
      <h1>The Products page</h1>
      <ul>
        <li>
          <Link to="/products/book">A Book</Link>
        </li>
        <li>
          <Link to="/products/carpet">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/course">Online course</Link>
        </li>
        <li>
          <Link to="/products/product4">Product 4</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;

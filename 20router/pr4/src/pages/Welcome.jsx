import React from "react";
import { Route, Routes, Link, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome page</h1>
      <Link to="new-user">New User</Link>
      <Outlet />
      {/* <Routes>
        <Route path="new-user" element={<p>Welcome new user</p>} />
      </Routes> */}
    </section>
  );
};

export default Welcome;

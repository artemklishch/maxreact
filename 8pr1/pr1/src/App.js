import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const deleteItemHandler = (id) => {
    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
  };
  return (
    <div>
      <AddUser onAddUser={setUsers} />
      {users.length > 0 && (
        <UsersList users={users} onDeleteItem={deleteItemHandler} />
      )}
    </div>
  );
}

export default App;

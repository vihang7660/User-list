import { useEffect, useState } from "react";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((resp) => resp.json())
      .then((data) => setUsers(data.data));
  }, []);

  console.log(users);

  return (
    <div>
      <UserList users={users} />
    </div>
  );
}

export default App;

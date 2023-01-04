import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [list, setList] = useState(users);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data.data);
        setList(data.data);
      });
  }, []);

  return (
    <div>
      <SearchBox setList={setList} users={users} />
      <UserList list={list} />
    </div>
  );
}

export default App;

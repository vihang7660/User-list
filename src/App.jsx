import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import UserList from "./UserList";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((resp) => resp.json())
      .then((data) => {
        setAllUsers(data.data);
        setFilteredUsers(data.data);
      });
  }, []);

  function handleSearch(searchText) {
    setFilteredUsers(
      allUsers.filter((user) =>
        user.first_name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <SearchBox handleSearch={handleSearch} />
        <UserList filteredUsers={filteredUsers} />
      </main>
    </>
  );
}

export default App;

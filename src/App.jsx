import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import UserList from "./UserList";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((resp) => resp.json())
      .then((data) => {
        setAllUsers(data.data);
        setFilteredUsers(data.data);
      })
      .finally(() => setLoading(false));
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
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <main>
          <SearchBox handleSearch={handleSearch} />
          <UserList filteredUsers={filteredUsers} />
        </main>
      )}
    </>
  );
}

export default App;

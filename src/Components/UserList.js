
import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search by name or email"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div>
        {filteredUsers.map(u => <UserCard key={u.id} user={u} />)}
      </div>
    </div>
  );
}

export default UserList;

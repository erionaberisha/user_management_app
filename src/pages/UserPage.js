import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserForm from "../Components/UserForm";
import "../style/UserPage.css";

export default function UserPage({ isDetails = false }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!isDetails) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => setUsers(res.data))
        .catch(err => console.error("Error fetching users:", err));
    }
  }, [isDetails]);

  useEffect(() => {
    if (isDetails) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setUser(res.data))
        .catch(err => console.error("Error fetching user:", err));
    }
  }, [isDetails, id]);

  const addUser = (newUser) => {
    setUsers([newUser, ...users]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(u => u.id !== userId));
  };

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  if (isDetails) {
    if (!user) return <p>Loading...</p>;

    return (
      <div className="userpage-container">
        <h2>{user.name}</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p>
          <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
        </p>
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><strong>CatchPhrase:</strong> {user.company.catchPhrase}</p>

        <button className="userpage-backbtn" onClick={() => navigate("/")}>
          ← Back to Users
        </button>
      </div>
    );
  }

  return (
    <div className="userpage-container">
      <UserForm addUser={addUser} />

      <input
        className="userpage-search"
        placeholder="Search by name or email"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <table className="userpage-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>
                <Link to={`/user/${user.id}`} className="userpage-link">
                  {user.name}
                </Link>
              </td>
              <td>
                <Link to={`/user/${user.id}`} className="userpage-link">
                  {user.email}
                </Link>
              </td>
              <td>{user.company?.name || "N/A"}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

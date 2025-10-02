import { useParams } from "react-router-dom";
import "../style/UserDetails.css";

function UserDetails({ users }) {
  const { id } = useParams();
  const user = users.find(u => u.id === parseInt(id));

  if (!user) return <p className="userdetails-notfound">User not found</p>;

  return (
    <div className="userdetails-card">
      <h2 className="userdetails-title">{user.name}</h2>
      <div className="userdetails-info">
        <p><span>Username:</span> {user.username}</p>
        <p><span>Email:</span> {user.email}</p>
        <p><span>Phone:</span> {user.phone}</p>
        <p><span>Website:</span> {user.website}</p>
        <p><span>Address:</span> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
        <p><span>Company:</span> {user.company.name}</p>
        <p><span>CatchPhrase:</span> {user.company.catchPhrase}</p>
      </div>
    </div>
  );
}

export default UserDetails;

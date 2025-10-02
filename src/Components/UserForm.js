import { useState } from "react";
import "../style/UserForm.css"; 

export default function UserForm({ addUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return alert("Name and email are required!");

    addUser({ id: Date.now(), name, email, company: { name: "N/A" } });
    setName("");
    setEmail("");
  };

  return (
    <div className="userform-card">
     
      <form className="userform-form" onSubmit={handleSubmit}>
        <input
          className="userform-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          className="userform-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button className="userform-button" type="submit">
          Add new user
        </button>
      </form>
    </div>
  );
}

export default function UserCard({ user }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "16px", 
        padding: "15px",
        margin: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)", 
        backgroundColor: "#fff",
        transition: "transform 0.2s ease-in-out",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h3 style={{ margin: "0 0 10px 0", color: "#333" }}>{user.name}</h3>
      <p style={{ margin: "5px 0", color: "#555" }}>{user.email}</p>
      <p style={{ margin: "5px 0", color: "#777", fontStyle: "italic" }}>
        {user.company?.name}
      </p>
    </div>
  );
}

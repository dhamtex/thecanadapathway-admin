import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        background: "indianred",
        color: "white",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Link
        to="/dashboard"
        style={{ color: "white", textDecoration: "none", cursor: "pointer" }}
      >
        <h1>ADMINISTRATOR</h1>
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "15%",
        }}
      >
        <Link
          to="/new-member"
          style={{ color: "white", textDecoration: "none", cursor: "pointer" }}
        >
          Add New Member
        </Link>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user");
            localStorage.removeItem("date");
            navigate("/");
          }}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default Header;

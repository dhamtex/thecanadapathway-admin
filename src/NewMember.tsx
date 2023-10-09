import Footer from "./components/Footer";
import Header from "./components/Header";
import withDashboardContext from "./hoc/withDashboardContext";
import { useState } from "react";
import "./NewMember.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewMember = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await axios
      .post(
        "http://localhost:8085/admin/user",
        {
          fullName,
          email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .catch((error) => {
        if (error.response?.data?.statusCode === 401) navigate("/");
        alert(error.response.data.message);
      });
    alert("Member successfully created");
    window.location.reload();
  };

  return (
    <div>
      <Header />
      <div
        style={{
          background: "rgb(204,204,204,.5)",
          display: "flex",
          justifyContent: "space-around",
          height: "100vh",
        }}
      >
        <form onSubmit={(event) => handleSubmit(event)} className="newUserForm">
          <p>Enter User Details</p>

          <div>
            <input
              type="text"
              pattern="^[a-zA-Z ]+"
              placeholder="Enter Full Name"
              required
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              onInvalid={(event) =>
                (event.target as HTMLInputElement).setCustomValidity(
                  "Please enter alphabets only"
                )
              }
              onInput={(event) =>
                (event.target as HTMLInputElement).setCustomValidity("")
              }
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <button>Submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default withDashboardContext(NewMember);

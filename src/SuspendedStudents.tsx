import Header from "./components/Header";
import withDashboardContext from "./hoc/withDashboardContext";
import "./ActiveStudents.css";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "./context/appcontext";
import moment from "moment";
import Footer from "./components/Footer";
import axios from "axios";

const SuspendedStudents = () => {
  const navigate = useNavigate();
  const { suspendedStudents } = useAppContext();

  const activateUser = async (id: number) => {
    await axios
      .post(
        `http://localhost:8085/admin/${id}/activate`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .catch((error) => {
        if (error.response?.data?.statusCode === 401) navigate("/");
      });
    window.location.reload();
  };

  return (
    <div>
      <Header />
      <div
        style={{
          background: "rgb(204,204,204,.5)",
          height: "100vh",
        }}
      >
        <div
          style={{
            height: "fit-content",
            width: "70%",
            margin: "0 auto",
            paddingTop: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button
              className="backButton"
              style={{
                borderRadius: "2px",
                padding: ".5rem 1rem",
                background: "#dc4d01",
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              Back
            </button>
            <span style={{ fontSize: ".9rem" }}>
              <Link
                to={"/dashboard"}
                style={{
                  color: "black",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Home {">"}
              </Link>
              <span style={{ color: "grey" }}> All Suspended Users</span>
            </span>
          </div>
          <div
            style={{
              background: "white",
              padding: "1rem 1rem 2rem",
              borderTop: "3px solid blue",
              marginTop: "1rem",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>All Suspended Users</span>
            <table style={{ marginTop: "1rem" }}>
              <tr>
                <th>Action</th>
                <th>Name</th>
                <th>Email</th>
                <th>Access Code</th>
                <th>Registration Date</th>
                <th>Status</th>
              </tr>
              {suspendedStudents.map((student) => {
                return (
                  <tr>
                    <td>
                      <span
                        style={{
                          marginLeft: "1rem",
                          color: "green",
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          activateUser(student.id);
                        }}
                      >
                        ACTIVATE
                      </span>
                    </td>
                    <td>{student.fullName}</td>
                    <td>{student.email}</td>
                    <td>{student.accessCode}</td>
                    <td>{moment(student.createdAt).format("LL")}</td>
                    <td>
                      <span style={{ fontWeight: "bold", color: "red" }}>
                        Suspended
                      </span>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withDashboardContext(SuspendedStudents);

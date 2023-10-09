import { useAppContext } from "./context/appcontext";
import withDashboardContext from "./hoc/withDashboardContext";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Dashboard = () => {
  const { activeStudents, suspendedStudents } = useAppContext();
  const navigate = useNavigate();

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
        <div
          style={{
            background: "white",
            height: "fit-content",
            padding: "3.5rem 1rem 7rem 1.5rem",
            width: "70%",
            margin: "1rem auto",
            borderTop: "3px solid blue",
          }}
        >
          <p style={{ margin: "0" }}>
            {`Dear ${JSON.parse(localStorage.getItem("user")!)!.fullName}`},
            Welcome
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div
              className="card"
              onClick={() => {
                navigate("/active-users");
              }}
            >
              <span style={{ fontSize: "2.5rem" }}>Active Users</span>
              <span
                style={{
                  display: "block",
                  marginTop: ".5rem",
                  fontSize: "1.2rem",
                  marginBottom: ".6rem",
                }}
              >
                Total Count: {activeStudents?.length}
              </span>
            </div>

            <div
              className="card-2"
              onClick={() => {
                navigate("/suspended-users");
              }}
            >
              <span style={{ fontSize: "2.5rem" }}>Suspended</span>
              <span
                style={{
                  display: "block",
                  marginTop: ".5rem",
                  fontSize: "1.2rem",
                  marginBottom: ".6rem",
                }}
              >
                Total Count: {suspendedStudents?.length}
              </span>
            </div>

            <div className="card-3">
              <span style={{ fontSize: "2.5rem" }}>Pixel</span>
              <span
                style={{
                  display: "block",
                  marginTop: ".5rem",
                  fontSize: "1.2rem",
                  marginBottom: ".6rem",
                }}
              >
                Update Facebook Pixel
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default withDashboardContext(Dashboard);

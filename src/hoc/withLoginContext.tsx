import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../Loading";

const withLoginContext = (Component: () => JSX.Element) => {
  return () => {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      const accessToken = localStorage.getItem("accessToken");
      const user = localStorage.getItem("user");
      const date = localStorage.getItem("date");
      const expiredToken = date && new Date().getTime() - +date > 3.6e6;
      if (accessToken && user && expiredToken === false) navigate("/dashboard");
      setLoading(false);
    }, []);

    return isLoading ? <Loading /> : <Component />;
  };
};

export default withLoginContext;

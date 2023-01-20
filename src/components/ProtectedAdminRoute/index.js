import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedAdminRoute(props) {
  const { component: Component } = props;
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedInUser");

  const parsedUser = JSON.parse(loggedInUser || '""');

  useEffect(() => {
    if (parsedUser.user.role !== "ADMIN") {
      navigate("/login");
    }
  }, [navigate, parsedUser.user.role]);

  return <Component />;
}

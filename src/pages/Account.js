import { useEffect, useState, useContext } from "react";
import { api } from "../api/api";
import { AuthContext } from "../contexts/authContext";
import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";


export function Account() {

  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get("/user/account");
      setUser(response.data);
    }

    fetchUser();
  }, []);


  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  }

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [loggedInUser, navigate]);

  return (
    <main className="main-divider main__account">
      <div className="main__account__container container">

        <Sidebar
          name={user.name}
          role={user.role}
          email={user.email}
          logout={() => handleLogOut()}
        />

        <div className="main__account__content">
          <Outlet />
        </div>

      </div>
    </main>
  );
}

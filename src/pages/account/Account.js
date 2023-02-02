import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";


export function Account() {

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {

        const response = await api.get("/user/account");
        setUser(response.data);

      } catch (error) {
        navigate("/login");
        console.log(error);
      }
    }

    fetchUser();
  }, [navigate]);

  return (
    <main className="main-divider main-account">
      <div className="d-flex align-items-start container">

        <Sidebar
          className="main-account__sidebar"
          name={user.name}
          role={user.role}
          email={user.email}
          id={user._id}
        />

        <div className="main-account__content">
          <Outlet />
        </div>

      </div>
    </main>
  );
}

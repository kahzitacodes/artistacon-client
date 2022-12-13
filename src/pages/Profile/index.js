import { Sidebar } from "../../components/Sidebar";
import { ProfileBio } from "../ProfileBio";

import style from "./style.module.css";

export function Profile() {



  return (
    <main className="main-divider">
      <div className={`container ${style.container}`}>

        <Sidebar
        />

        <div className="content">
          <ProfileBio />
        </div>

      </div>
    </main>
  );
}

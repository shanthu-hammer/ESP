import React from "react";
import "../dashboard/Dashboard.css";
import Service from "../service/Service";
import Netflix from "../../assets/logoCollection/netflixLogo.png";
import Prime from "../../assets/logoCollection/primeLogo.jpg";
import Hulu from "../../assets/logoCollection/huluLogo.jpg";
import Astrill from "../../assets/logoCollection/astrillLogo.png";
function Dashboard() {
  return (
    <div className="dashboard">
      <Service
        Logo={Netflix}
        name={"Netflix"}
        expiraryDate={"22/10/2023"}
        amount={"10000.00"}
      />
      <Service
        Logo={Prime}
        name={"Prime Video"}
        expiraryDate={"22/10/2023"}
        amount={"10000.00"}
      />
      <Service
        Logo={Hulu}
        name={"Netflix"}
        expiraryDate={"22/10/2023"}
        amount={"10000.00"}
      />
      <Service
        Logo={Astrill}
        name={"Netflix"}
        expiraryDate={"22/10/2023"}
        amount={"10000.00"}
      />
    </div>
  );
}

export default Dashboard;

import React from "react";
import "../dashboard/Dashboard.css";
import Service from "../service/Service";
import Netflix from "../../assets/logoCollection/netflixLogo.png";
import Prime from "../../assets/logoCollection/primeLogo.jpg";
import Hulu from "../../assets/logoCollection/huluLogo.jpg";
import Astrill from "../../assets/logoCollection/astrillLogo.png";
function Dashboard() {
  const userServices = [
    {
      Logo: Netflix,
      name: "Netflix",
      expiraryDate: "22/10/2023",
      amount: "RMB ",
    },
    {
      Logo: Prime,
      name: "Prime Video",
      expiraryDate: "22/10/2023",
      amount: "10000.00",
    },
    {
      Logo: Hulu,
      name: "Hulu",
      expiraryDate: "22/10/2023",
      amount: "10000.00",
    },
    {
      Logo: Astrill,
      name: "Astrill",
      expiraryDate: "22/10/2023",
      amount: "10000.00",
    },
  ];

  return (
    <div className="dashboard">
      {userServices.map((item) => (
        <Service
          Logo={item.Logo}
          name={item.name}
          expiraryDate={item.expiraryDate}
          amount={item.amount}
        />
      ))}
    </div>
  );
}

export default Dashboard;

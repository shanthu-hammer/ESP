import React from "react";
import "../dashboard/Dashboard.css";
import Service from "../service/Service";
import Netflix from "../../assets/logoCollection/netflixLogo.png";
import Prime from "../../assets/logoCollection/primeLogo.jpg";
import Hulu from "../../assets/logoCollection/huluLogo.jpg";
import Astrill from "../../assets/logoCollection/astrillLogo.png";
import Navbar from "../navbar/Navbar";
import { useParams, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const ContactClick = () => {
    navigate("/contact/" + id);
    //alert("i have been clicked ");
  };
  const SignoutClick = () => {
    navigate("/");
  };
  const userServices = [
    {
      Logo: Netflix,
      name: "Netflix",
      expiraryDate: "22/10/2023",
      amount: "28 ",
    },
    {
      Logo: Prime,
      name: "Prime Video",
      expiraryDate: "22/10/2023",
      amount: "35",
    },
    {
      Logo: Hulu,
      name: "Hulu",
      expiraryDate: "22/10/2023",
      amount: "28",
    },
    {
      Logo: Astrill,
      name: "Astrill",
      expiraryDate: "22/10/2023",
      amount: "40",
    },
  ];

  return (
    <div className="dashboard">
      <Navbar ContactClick={ContactClick} SignoutClick={SignoutClick} />

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

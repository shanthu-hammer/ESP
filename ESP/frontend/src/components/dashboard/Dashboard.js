import React from "react";
import "../dashboard/Dashboard.css";
import Service from "../service/Service";
import Netflix from "../../assets/logoCollection/netflixLogo.png";
import Prime from "../../assets/logoCollection/primeLogo.jpg";
import Hulu from "../../assets/logoCollection/huluLogo.jpg";
import Astrill from "../../assets/logoCollection/astrillLogo.png";
import Navbar from "../navbar/Navbar";
import Aws_connection from "../../aws_esp/aws_connection";
function Dashboard() {
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

  const contactClick = async () => {
    try {
      let result = await Aws_connection("user_credential.json");
      console.log(result); //Aws_connection
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="dashboard">
      <Navbar />
      <button
        onClick={() => {
          contactClick();
        }}
      >
        Testing
      </button>

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

import React, { useEffect, useState } from "react";
import "../dashboard/Dashboard.css";
import Service from "../service/Service";
import Netflix from "../../assets/logoCollection/netflixLogo.png";
import Prime from "../../assets/logoCollection/primeLogo.jpg";
import Hulu from "../../assets/logoCollection/huluLogo.jpg";
import Astrill from "../../assets/logoCollection/astrillLogo.png";
import Navbar from "../navbar/Navbar";
import { GetDataById, GetData } from "../../utilities/db_esp/db";
import { useParams, useNavigate } from "react-router-dom";

function Dashboard() {
  const [data, setData] = useState();
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

  /*
Fetch Data(Promise) from DB 
*/
  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    GetData("packages")
      .then((response) => {
        console.log(response.data);
        alert(response.data[2].accId);

        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const userServices = [
    {
      Logo: Netflix,
      name: "Default",
      expiraryDate: "11/11/1111",
      amount: "11 ",
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

import axios from "axios";

//const axios = require("axios");
const dbUrl = "http://64.227.142.52:2000/esp/"; //process.env.REACT_APP_DB_URL

export const GetData = (tableName) => {
  //console.log(dbUrl + tableName);
  return axios.get(dbUrl + tableName);

  //.then((response) => {
  //console.log(response.data);
  //return response.data;
  // });
};
export const GetDataById = (id) => {
  axios.get(dbUrl + id).then((response) => {
    console.log(response.data);
  });
};

// GetData("packages").then((a) => {
//   console.log(a);
// });

// GetData("packages")
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//console.log(a);
// GetData("packages")
//   .then((response) => {
//     console.log(response.data); // Handle the fetched data here
//   })
//   .catch((error) => {
//     console.error(error); // Handle errors here
//   });

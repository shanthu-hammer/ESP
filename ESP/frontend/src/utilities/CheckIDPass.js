import React from "react";
import Aws_connection from "./aws_esp/aws_connection";
const CheckIDPass = async (id, password) => {
  //id : ID entered by the user in login page
  //password :Passwordentered by the user in login page
  //dbID : ID fetched from aws
  //dbPassword :Password fetched from aws
  //Return : True : IF id and password

  let userAuths;
  try {
    userAuths = await Aws_connection("user_credential.json");
    //console.log(userAuths[0]);
  } catch (error) {
    console.log("Error:", error);
  }
  for (const idpass of userAuths) {
    //console.log("data from db ", idpass.id, idpass.pass);
    if (id == idpass.id && password == idpass.pass) {
      return true;
    }
  }

  return false;

  // if(id == dbID && password == dbPassword){

  // return true
  // }else {}
  //   return
};

export default CheckIDPass;

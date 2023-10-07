import React, { useState } from "react";
import AWS from "aws-sdk";
function Aws_connection() {
  //   const [data, setData] = useState("Defaulttttt");

  AWS.config.update({
    accessKeyId: "AKIAS7MK75OX4UZWL2JX",
    secretAccessKey: "xKgtYZWythRFpOl3dMd5ErQLx+sFylILuxyP5JzF",
    //   region: "YOUR_REGION",
  });
  const s3 = new AWS.S3();
  const params = {
    Bucket: "shanthubucket",
    Key: "test.json",
  };

  s3.getObject(params, (err, data) => {
    if (err) {
      console.error("Error:", err);
    } else {
      const jsonContent = JSON.parse(data.Body.toString());
      console.log("JSON Content:", jsonContent);
      //   setData(jsonContent);
    }
  });
}

export default Aws_connection;

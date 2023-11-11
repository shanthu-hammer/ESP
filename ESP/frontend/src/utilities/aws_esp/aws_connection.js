import AWS from "aws-sdk";
const Aws_connection = async (fileName) => {
 
  AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_SECRECT_ACCESS_KEY,
   
    //   region: "YOUR_REGION",
  });
  const s3 = new AWS.S3();
  const params = {
    Bucket: "shanthubucket",
    Key: fileName,
    //header
  };
  return new Promise((resolve, reject) => {
    s3.getObject(params, (err, data) => {
      if (err) {
        //console.error("Error:", err);
        reject(err); // Reject the Promise with the error
      } else {
        const jsonContent = JSON.parse(data.Body.toString());
        //console.log(jsonContent);
        resolve(jsonContent); // Resolve the Promise with the fetched data
      }
    });
  });
};

export default Aws_connection;

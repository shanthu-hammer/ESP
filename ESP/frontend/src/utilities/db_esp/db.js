//import axios from 'axios'
const axios = require('axios');
const dbUrl =''//process.env.REACT_APP_DB_URL


 const GetData=()=>{    axios.get(dbUrl).then(
    (response)=>{console.log(response.data )}
    )}
const GetDataById =(id)=>{
axios.get(dbUrl + id).then((response)=>{console.log(response.data)})

}

//GetDataById(4)
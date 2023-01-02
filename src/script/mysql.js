// import express from 'express'
// const mysql = require('mysql')
// const app = express()

const config = {
    host: "attendance.mysql.database.azure.com",
    user: "E-gate",
    password: " H03m1x2M15o5",
    database: "test",
    port: 3306, // default mysql port number
    // ssl: {ca: fs.readFileSync("./ssl/BaltimoreCyberTrustRoot.crt.pem")}
};

function mysql(){
    const client = new mysql.createConnection(config)
    const query = "SELECT * FROM test;";

    console.log("connection start...")

    client.connect((err) => {
        if(err){
            console.log("Internal Server Error")
            console.log(err)
            throw err;
        }else{
            console.log("Connection established")
            results = getData(query);
            for(i=0; i< results.length; i++){
                console.log(JSON.stringify(results[i]));
            }
        }
    })

    client.end((err) => {
        if(err) throw err;
        else console.log("Closing connection")
    })
}

export default mysql

// app.get("/userList", (req, res) =>{
//     const query = `SELECT * FROM ${req.table}`;

//     client.connect((err) => {
//         if (err){
//             console.log(err);
//             throw err;
//         }
//         else{
//             console.log("Connection established")
//             res.json({message : getData(query)})
//         }
//     })

//     client.end((err) => {
//         if(err) throw err;
//         else console.log("Closing connection")
//     })
// })



function getData(query){
    client.query(query, (err, results, fields) => {
        if (err) throw err;
        else return(results)
    })


}

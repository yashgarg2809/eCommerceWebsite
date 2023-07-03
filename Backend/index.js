import express from "express"
import mysql from "mysql"
import cors from 'cors'
import { json } from "react-router-dom";

const app = express();

app.use(express.json())
app.use(cors())


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"yashgarg",
    database:"ecommerceprojectdb"
})


app.get("/users", (req,res)=>{
    const q = "SELECT * FROM users"
    db.query(q, (err,data) =>{
        if (err) return res.json("ER");
        return res.json(data);
    })
    // res.json("Hello this is backedn")

})


app.get("/allOrders", (req, res) => {
    let param = req.query.username;
    console.log(param)
    const q = "SELECT * FROM orders where username = (?)"
    const vals = param
    db.query(q,vals, (err, data) => {
        if (err) return res.json("ER");
        return res.json(data);
    })
    // res.json("Hello this is backedn")

})


app.post("/users", (req,res)=>{
    const q = "INSERT INTO users (`username`,`password`) VALUES (?)";
    // const values = ["Usernamefrombackend", "passfrombackedn"]
    console.log(req.dat);
    const values = [req.body.username, req.body.password]
    db.query(q,[values],(err, data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.post("/placeOrder", (req,res)=>{
    console.log("Request received")
    const q = "INSERT INTO orders (orderString, username) VALUES(?)";
    let s = JSON.stringify(req.body.orderList);
    if(s.length===2){
        return;
    }
    const values = [s, req.body.username]

    db.query(q,[values], (err,data) =>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.listen(8800, ()=>{
    console.log("Connected to Backend1")
})
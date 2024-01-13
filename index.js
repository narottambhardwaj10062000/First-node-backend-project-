import express from "express";
import path from "path";


//CREATING A SERVER USING EXPRESS.JS
const app = express();


//USING MIDDLEWARES
// app.set("view engine", "ejs");
app.use(express.static(path.join(path.resolve(), "public")));


//DEFINING THE ROUTES/APIs
app.get("/", (request, response) => {
    response.render("index.ejs", { name: "Narottam", age: "23"});
    console.log("server is up and running");
})

//MAKING THE SERVER LISTEN TO SOME PORT
app.listen(5000, () => {
    console.log("server is listening");
})


//WHAT WE LEARNT??
//1. CREATING A SERVER USING WXPRESS.JS
//2. HOW TO SEND A NORMAL TEXT, JSON , HTML, DYNAMIC FILES(ejs), STATIC FILES TO MY SERVER
const express = require("express");
const cors = require("cors");
const bearerToken = require("express-bearer-token");
const bodyParser = require("body-parser");

const port = process.env.PORT || 2700; //port
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bearerToken());
app.use("/public", express.static("public"));
app.use(express.static('public'))

const {   
    loginRouter,
    registerRouter, 
    superAdminRouter,
    adminRouter
    } = require("./routers");


app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/keepLoggedIn", loginRouter);
app.use("/sam", superAdminRouter);
app.use("/search", superAdminRouter);
app.use("/am", adminRouter);
app.use("/tm", superAdminRouter);
app.use("/ts", superAdminRouter);


app.listen(port, () => console.log(`Server running in port`, port));
//running nya pakai npx nodemon index.js

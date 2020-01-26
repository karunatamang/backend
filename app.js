require("./database/mongoose")
const express = require('express')
const bodyparser = require("body-parser")
const path = require("path");
const app = express()
const publicdirectory= path.join(__dirname,'public');
app.use(express.static(publicdirectory));

//Routers
const UserRoute = require("./routes/user_route")
const DonateRoute = require("./routes/donate_route")
const UploadRoute = require("./controller/uploadfile")
//parse json data in form body client UI
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use(express.json())
app.use(UserRoute)
app.use(DonateRoute)
app.use(UploadRoute)


app.listen("3030")
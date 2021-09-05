const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const app = express();

//Basic things
dotenv.config();
const uri = process.env.MONGODB_URL

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use(express.static("public"));

// MongoDb connection
mongoose.connect(uri)
.then((connection) => {console.log("connected to the Database!")})
.catch((error) => {console.log(error)});

//Routes Middlewares
app.use('/api/users',userRoutes)
app.use('/api/auth',authRoutes) 

app.listen(8080, () => {
    console.log("server is up and running!");
});


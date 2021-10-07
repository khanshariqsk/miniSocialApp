const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");
const bodyParser = require('body-parser');
const path = require("path")
const app = express();

//Basic things
dotenv.config();
const uri = process.env.MONGODB_URL
const port = 8080

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended:true}));
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use(express.static("public"));

app.use('/images',express.static(path.join(__dirname,'public/images')))

// MongoDb connection
mongoose.connect(uri)
    .then((connection) => { console.log("Connected to the Database!") })
    .catch((error) => { console.log(error) });

//Routes Middlewares
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)

app.listen(port, () => {
    console.log("server is up and running!");
});


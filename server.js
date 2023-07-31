const express = require("express");
var expressLayouts = require("express-ejs-layouts");
const colors = require("colors");
const morgan = require("morgan");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const routers = require("./routers");

//configuring dotenv
require("dotenv").config();

//Application
const app = express();

//Middlewares
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//Setting up express laouts
app.use("/", expressLayouts);

//accessing assets files from front-end
app.use(express.static("assets"));

// setting up veiw engine ejs
app.set("view engine", "ejs");
app.set("views", "./views");

// Api for testing
app.get("/", (req, res) => {
  res.render("home", { title: "Health | Management WebApp" });
});

//setting up routes
app.use("/api/v1", routers);

//defining our port
const port = process.env.PORT || 8000;

//method for starting server and setting up database connection
module.exports.startServer = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
    if (db) {
      console.log(`Database connected successfully :: MongoDB!`.bgGreen.white);
      //if app connected with database successfully then call start server
      app.listen(port, (err) => {
        if (err) {
          console.log(`Error in connecting with server:: ${err}`.bgRed.white);
        }
        console.log(
          `Server is up and running on port :: ${port}`.bgGreen.white
        );
      });
    } else {
      console.log(`Error in connecting with MONGODB!`.bgRed.white);
    }
  } catch (error) {
    console.log(`Server Error----- ${error}`);
  }
};

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const db = require("./models");

app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

const userRouter = require("./routes/User");
app.use("/user", userRouter);

const bannerRouter = require("./routes/Banner");
app.use("/banner", bannerRouter);

const welcomeRouter = require("./routes/Welcome");
app.use("/welcome", welcomeRouter);

const aboutRouter = require("./routes/About");
app.use("/about", aboutRouter);

const collectionsRouter = require("./routes/Collections");
app.use("/collections", collectionsRouter);

const roadmapRouter = require("./routes/Roadmap");
app.use("/roadmap", roadmapRouter);

const faqRouter = require("./routes/FAQ");
app.use("/faq", faqRouter);

const teamRouter = require("./routes/Team");
app.use("/team", teamRouter);

db.sequelize.sync().then(() => {
  app.listen((process.env.PORT || 3001), () => {
    console.log(`Server is running on port 3001`);
  });
}).catch((error) => {
  console.log(error);
});

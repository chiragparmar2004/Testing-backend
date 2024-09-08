import express from "express";
import "dotenv/config";
const StartServer = async () => {
  const app = express();

  const PORT = process.env.PORT || 8080;

  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));

  app.get("/", (req, res) => {
    res.status(200).json({
      message: "Initialization successful",
    });
  });
  app.get("/testing", (req, res) => {
    res.status(200).json({
      message: "testing successful",
    });
  });

  app.get("/g", (req, res) => {
    res.status(200).json({
      message: "successful",
    });
  });

  app.get("/test", (req, res) => {
    res.status(200).json({
      message: "Helllo there",
    });
  });
  app
    .listen(PORT, () => {
      console.log(`listening to port ${PORT}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
};

StartServer();

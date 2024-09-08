import express from "express";
import "dotenv/config";
const StartServer = async () => {
  const app = express();

  const PORT = process.env.PORT || 4000;

  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));

  app.get("/", (req, res) => {
    res.status(200).json({
      message: "Initialization successful",
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

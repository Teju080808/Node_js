const express = require("express");
const app = express();
const db = require("./config/db");
const multer = require("multer");
const path = require("path");

const user = require("./userModel/userModel");
app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.json());

app.use("/upload", express.static(path.join(__dirname, "upload")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// const ImageUpload = multer({ storage: storage }).single("image")
const ImageUpload = multer({ storage: storage }).array("image", 2);

app.get("/", async (req, res) => {
  const userr = await user.find({});
  res.render("home", { userr });
});

app.post("/insertData", ImageUpload, async (req, res) => {

  const { username, password } = req.body;

  let images = [];

  if (req.files) {
    images = req.files.map((file) => file.path);
  }

  await user.create({
    username:username,
    password,
    image: images
  });

  res.redirect("/");
});

app.get("/delete", async (req, res) => {
  await user.findByIdAndDelete(req.query.id);
  res.redirect("/");
});

app.get("/edit", async (req, res) => {
  const userData = await user.findById(req.query.id);
  res.render("edit", { userData });
});

app.post("/editData",async(req,res)=>{
    await user.findByIdAndUpdate(req.body.id,req.body)
    res.redirect("/")
})


app.listen(3005, () => {
  console.log("server listen");
});

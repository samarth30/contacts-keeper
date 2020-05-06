var express = require("express");
var connectDB = require("./config/db");
const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contracts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("the server is on the port ", PORT);
});

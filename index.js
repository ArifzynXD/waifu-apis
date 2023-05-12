const express = require('express');
const app = express();
app.use(express.static("assets"));

const PORT = 8080

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/test", (req, res) => {
  res.sendFile(process.cwd() + "/views/test.html");
});

app.listen(PORT, function() {
  console.log("Server running on port http://localhost:" + PORT);
});
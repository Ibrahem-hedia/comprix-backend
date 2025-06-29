const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Comprix Backend is live!");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

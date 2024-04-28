const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();

const pool = require("./db");

// get all todo
app.get("/tasks", (req, res) => {
  let sql = "SELECT * FROM todo";
 
  pool.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching tasks:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

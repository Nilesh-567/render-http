const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3000;

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', async (req,res) => {
    console.log("final achievement"); 
    res.send("from get");
})
// Endpoint to handle form submission
app.post('/submit', async (req, res) => {
  console.log("success");
  res.send("from post")
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

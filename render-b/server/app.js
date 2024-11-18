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
    const name = req.body.name; 
    const password = req.body.password; 
    const result = {name,password}; 
    const arr = result.values(); 
  console.log("success");
  res.send(`from post : ${arr[0]} and ${arr[1]}`); 
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

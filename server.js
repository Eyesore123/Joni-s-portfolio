import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

app.use(express.static("c:/Users/Joni/Desktop/Joni's Website/public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
  res.render('test page.ejs');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
import express from "express";
import axios from "axios";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}`));

// Set the views directory


app.set('views', path.join(__dirname, 'views'));
// Set the view engine
app.set('view engine', 'ejs');

// Define the GET route for rendering the testPage.ejs
app.get('/', (req, res) => {
  res.render('test page', { randomMeme: ""});
});


app.post("/gimme", async (req, res) => {
    try {
        const response = await axios.get("https://meme-api.com/gimme");
        const randomMeme = response.data.url;
        res.render('test page', { randomMeme });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching random meme");
    }
});


// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
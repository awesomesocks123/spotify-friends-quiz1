const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Spotify Friends Quiz server is running!');
});

// --- MongoDB Connection ---

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB Atlas!');
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}/`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });


// --- Mongoose Models ---

const userSchema = new mongoose.Schema({
    // Define your user schema here (e.g., spotifyId, username, etc.)
});

const User = mongoose.model('User', userSchema);

// ... your other server setup

// Add a route to handle the authentication callback
app.get('/callback', async(req, res) => {
    const code = req.query.code;
    const token = await exchangeCodeForToken(code);
    if (token) {
        await storeTokenInSession(req, res, token);
        const userData = await fetchUserData(token.accessToken);
        if (userData) {
            // Store the user data in a session or database
            // For example, using express-session:
            req.session.userData = userData;
            req.session.save((err) => {
                if (err) {
                    console.error('Error saving user data to session:', err);
                }
            });
        }
    }
    res.redirect('http://localhost:3000/home'); // Redirect back to frontend's home page
});


app.get('/api/spotify-config', (req, res) => {
    res.json({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        redirectUri: process.env.SPOTIFY_REDIRECT_URI,
    });
});

app.post('/api/token', async(req, res) => {
    const code = req.body.code;
    const token = await exchangeCodeForToken(code);
    if (token) {
        res.json(token);
    } else {
        res.status(401).json({ error: 'Invalid code' });
    }
});
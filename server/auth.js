const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
});

const exchangeCodeForToken = async(code) => {
    try {
        const tokenResponse = await spotifyApi.getToken(code);
        const accessToken = tokenResponse.body.access_token;
        const refreshToken = tokenResponse.body.refresh_token;
        return { accessToken, refreshToken };
    } catch (error) {
        console.error('Error exchanging code for token:', error);
        return null;
    }
};

const storeTokenInSession = async(req, res, token) => {
    // Store the token in a session or database
    // For example, using express-session:
    req.session.token = token;
    req.session.save((err) => {
        if (err) {
            console.error('Error saving token to session:', err);
        }
    });
};

const fetchUserData = async(accessToken) => {
    try {
        const userDataResponse = await spotifyApi.getMe(accessToken);
        const userData = userDataResponse.body;
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
};

module.exports = {
    exchangeCodeForToken,
    storeTokenInSession,
    fetchUserData,
};
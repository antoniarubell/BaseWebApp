const SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId: '4079e96258ad403fbb50977999246997',
  clientSecret: 'cb71c9e374d04fe6889856e7ad4768fa',
  redirectUri: 'http://localhost:8888/callback'
});

module.exports = { spotifyApi };

// const express = require('express');
// const request = require('request'); // Or you can use another library like axios for HTTP requests
// const querystring = require('querystring');

// const app = express();

// const client_id = '4079e96258ad403fbb50977999246997'; // Replace with your Spotify Client ID
// const client_secret = 'cb71c9e374d04fe6889856e7ad4768fa'; // Replace with your Spotify Client Secret
// //const redirect_uri = 'https://guarded-depths-00065-654f7f46dc5b.herokuapp.com/callback'; // Your redirect URI
// const redirect_uri = 'http://localhost:8888/callback'; // Your redirect URI

// // Route to handle redirect from Spotify
// app.get('/callback', (req, res) => {
//   const code = req.query.code || null;

//   const authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     form: {
//       code: code,
//       redirect_uri: redirect_uri,
//       grant_type: 'authorization_code'
//     },
//     headers: {
//       'Authorization': 'Basic ' + (Buffer.from(`${client_id}:${client_secret}`).toString('base64'))
//     },
//     json: true
//   };

//   request.post(authOptions, (error, response, body) => {
//     if (!error && response.statusCode === 200) {
//       const access_token = body.access_token;
//       const refresh_token = body.refresh_token;

//       // Redirect or respond with the tokens, or use them to make further API requests
//       res.redirect('/#' +
//         querystring.stringify({
//           access_token: access_token,
//           refresh_token: refresh_token
//         }));
//     } else {
//       // Handle errors, e.g., display an error message
//       res.send('An error occurred while trying to retrieve the access token.');
//     }
//   });
// });

// const port = process.env.PORT || 8888;
// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

// const express = require('express');
// const { spawn } = require('child_process');
// const app = express();
// const port = 5006;
// //const port = process.env.PORT || 3000;

// app.use(express.json());

// // Endpoint to run the Python script
// app.get('/weather', (req, res) => {
//   const searchQuery = req.query.q; // Assuming you pass the search query as a query parameter
//   const pythonProcess = spawn('python', ['get_weather.py', searchQuery]);

//   pythonProcess.stdout.on('data', (data) => {
//     // Send the Python script's output back to the client
//     res.send(data.toString());
//   });

//   pythonProcess.stderr.on('data', (data) => {
//     // Handle errors
//     console.error(`stderr: ${data}`);
//     res.status(500).send('Error executing Python script');
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });



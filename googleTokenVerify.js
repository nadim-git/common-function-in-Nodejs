// Here's an example of a middleware function in Node.js that can be used to verify a Google auth token 
// on the server side:

// Handle Token authentication by server side Nodejs


const {OAuth2Client} = require('google-auth-library');

module.exports = async function (req, res, next) {
    const client = new OAuth2Client(CLIENT_ID);
    try {
        if (req.headers && req.headers.authorization) {
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: CLIENT_ID,
            });
            const payload = ticket.getPayload();
            req.user = payload;
            next();
          } else {
            return res.status(500).send({
              status: "error",
              message: "Unauthorized Access !,Please provide token",
            });
          }
        // next();
    } catch (error) {
        return res.status(500).send({
            status: "error, in",
            message: error.message,
          });
    }
}


// You can then use this middleware function to protect routes that require authentication 
// by adding it to the route handler:


app.use('/api/route', verifyGoogleAuthToken, (req, res) => {
    // Handle the request
});


// Make sure to replace YOUR_CLIENT_ID with your Google API project's client ID.



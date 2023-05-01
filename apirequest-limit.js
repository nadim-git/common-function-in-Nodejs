const rateLimit = require('express-rate-limit');



const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 2, // limit each IP to 100 requests per windowMs
    handler: (req, res) => {
        res.status(429).json({ status: "error", message: 'Too many requests, please try again later.' });
    },
})


//use like this in route
router.post("/login_user_mongo", limiter, login_user_mongo).all("/login_user_mongo", methodErrRes());



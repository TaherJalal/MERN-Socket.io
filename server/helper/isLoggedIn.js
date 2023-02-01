const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {

    let token = ""
    var authorizationToken = req.header("Authorization");
    console.log(authorizationToken);

    if(authorizationToken){
        authorizationToken = authorizationToken.replace("Bearer ", "");
        console.log(authorizationToken);
        token = authorizationToken;
    }

    if(!token){
        return res.status(401).json({"Message" :"Protected"})
    }

    try{
        const decoded = jwt.verify(token, "SECRET");
        req.user = decoded.user;
        next();
    } catch (error) {
        return res.status(401).json({"message": "Invalid Token"})
    }

}
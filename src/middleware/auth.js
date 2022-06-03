const jwt = require("jsonwebtoken");

const auth = async (request, response, next) => {
	const token = await request.header("Authorization");
	if (!token) {
		return response.status(401).send("Access Denied, No token Provided.");
	} else {
		try {
			const jwtPrivateKey = process.env.jwtPrivateKey;
			const decoded = await jwt.verify(token, jwtPrivateKey);
			request.user = decoded;

			next();
		} catch (ex) {
			response.status(400).send("Invalid Token");
		}
	}
};

module.exports = auth;

import jwt from 'jsonwebtoken';

const auth = async (request, response, next) => {
    try {
        console.log("🔍 [AUTH] Incoming request");
        console.log("Cookies:", request.cookies);
        console.log("Auth Header:", request.headers.authorization);

        const token =
            request.cookies.accessToken ||
            request?.headers?.authorization?.split(" ")[1];

        console.log("Extracted Token:", token ? "[Present]" : "[Missing]");

        if (!token) {
            console.log("❌ No token provided");
            return response.status(401).json({
                message: "Provide token"
            });
        }

        console.log("ENV SECRET_KEY_ACCESS_TOKEN:", process.env.SECRET_KEY_ACCESS_TOKEN);

        const decode = await jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);
        console.log("✅ Token Decoded:", decode);

        if (!decode) {
            console.log("❌ Token verification failed");
            return response.status(401).json({
                message: "unauthorized access",
                error: true,
                success: false
            });
        }

        request.userId = decode.id;
        console.log("👤 User ID from token:", request.userId);

        next();

    } catch (error) {
        console.error("🔥 [AUTH ERROR]:", error);
        return response.status(500).json({
            message: "You have not login", // error.message || error,
            error: true,
            success: false
        });
    }
};

export default auth;

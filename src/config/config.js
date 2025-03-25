import "dotenv/config";

export const config = {
    port: process.env.PORT || 3000,
    dbUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET,
    email: process.env.EMAIL,
    email_password: process.env.EMAIL_PASSWORD,
    token_mp: process.env.TOKEN_MP,
    mp_token_access: process.env.MP_TOKEN_ACCESS
}
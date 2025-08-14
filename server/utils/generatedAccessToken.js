// import jwt from 'jsonwebtoken'

// const generatedAccessToken = async(userId)=>{
//     const token = await jwt.sign({ id : userId},
//         process.env.SECRET_KEY_ACCESS_TOKEN,
//         { expiresIn : '5h'}
//     )

//     return token
// }

// export default generatedAccessToken

import jwt from 'jsonwebtoken'

const generatedAccessToken = async (userId) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in environment variables");
    }
    return jwt.sign(
        { id: userId },
        process.env.JWT_SECRET,
        { expiresIn: '5h' }
    );
};

export default generatedAccessToken;

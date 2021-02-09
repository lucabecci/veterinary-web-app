import jwt from 'jsonwebtoken'
class JwtHelper{
    public static async createToken(userID: string): Promise<string>{
        const token = await jwt.sign({id: userID}, 'test')
        return token
    }
}

export default JwtHelper
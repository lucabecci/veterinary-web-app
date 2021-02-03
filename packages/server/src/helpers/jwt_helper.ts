import jwt from 'jsonwebtoken'
class JwtHelper{
    public static async createToken(userID: string): Promise<string>{
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const token = await jwt.sign({id: userID}, process.env.JWT_TOKEN!)
        return token
    }
}

export default JwtHelper
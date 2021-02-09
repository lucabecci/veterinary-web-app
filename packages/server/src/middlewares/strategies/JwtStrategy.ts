import { ExtractJwt, StrategyOptions, Strategy } from "passport-jwt"
import { User } from "../../entities/User"

class JwtStrategy{
    private _options: StrategyOptions
    public _strategy: Strategy
    constructor(){
        this._options ={
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'test',
        }
        this._strategy = new Strategy(this._options, async(payload, done) => {
            try{
                const user = await User.findOne({where:{id: payload.id}})
                if(user){
                    return done(null, user.id)
                }
                return done(null, false)
            }
            catch(e){
                console.log(e)
            }
        })
    }
}

const jwtStrategy = new JwtStrategy()

export default jwtStrategy._strategy
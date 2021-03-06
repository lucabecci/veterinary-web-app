import express, { Application } from "express"
import cors from 'cors'
import morgan from 'morgan'
import Database from "./database/Database"
import UserRouter from './routes/user.routes'
import passport from "passport"
import JwtStrategy from "./middlewares/strategies/JwtStrategy"
import PetRouter from "./routes/pet.routes"
import ConsultRouter from "./routes/consult.routes"
class App{
    private _app: Application
    private _userRouter: UserRouter
    private _petRouter: PetRouter
    private _consultRouter: ConsultRouter
    constructor(){
        this._app = express()
        this._userRouter = new UserRouter
        this._petRouter = new PetRouter
        this._consultRouter = new ConsultRouter

        this.initDB()
        this.initConfig()
        this.initRoutes()
    }

    private initDB(){
        Database.getConnection()
    }

    private initConfig(){
        this._app.use(express.json())
        this._app.use(express.urlencoded({extended: false}))
        this._app.use(cors())
        this._app.use(morgan('dev'))
        this._app.use(passport.initialize())
        passport.use(JwtStrategy)
    }

    private initRoutes(){
        this._app.get('/', (_req, res) => {
            res.send('Index of the veterinary API')
        })
        this._app.use('/', this._userRouter._router)
        this._app.use('/pets', this._petRouter._router)
        this._app.use('/consult', this._consultRouter._router)
    }

    public run(): void{
        this._app.listen(process.env.PORT || 4000, () => {
            console.log('Server on port: ', process.env.PORT || 4000)
        })
    }
}

export default App
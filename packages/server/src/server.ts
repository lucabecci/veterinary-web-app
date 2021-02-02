import express, { Application } from "express"
import cors from 'cors'
import morgan from 'morgan'
import Database from "./database/Database"

class App{
    private _app: Application
    constructor(){
        this._app = express()

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
    }

    private initRoutes(){
        this._app.get('/', (_req, res) => {
            res.send('Index of the veterinary API')
        })
    }

    public run(){
        this._app.listen(4000, () => {
            console.log('Server on port: ', 4000)
        })
    }
}

export default App
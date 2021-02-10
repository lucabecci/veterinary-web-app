import express, { IRouter } from "express";
import passport from "passport";
import UserController from "../controllers/user.controller";

class UserRouter {
    public _router: IRouter

    constructor(){
        this._router = express.Router()
        this.routes()
    }

    private routes(){
        this._router.post('/register', UserController.Register)
        this._router.post('/login', UserController.Login)
        this._router.get(
            '/account', 
            passport.authenticate('jwt', {session: false}),
            UserController.Account
            )
        this._router.post(
            '/isLogged', 
            passport.authenticate('jwt', {session: false}),
            UserController.IsLoggedIn
            )
    }


}

export default UserRouter
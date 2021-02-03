import express, { IRouter } from "express";
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
    }


}

export default UserRouter
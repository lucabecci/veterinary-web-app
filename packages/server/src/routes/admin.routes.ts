import express, { IRouter } from "express";

class AdminRouter {
    public _router: IRouter

    constructor(){
        this._router = express.Router()
        this.routes()
    }

    private routes(){
        this._router.get('/')
    }


}

export default AdminRouter
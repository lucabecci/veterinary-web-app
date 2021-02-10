import express, { IRouter } from "express";
import passport from "passport";
import ConsultController from "../controllers/consult.controller";

class ConsultRouter {
    public _router: IRouter

    constructor(){
        this._router = express.Router()
        this.routes()
    }

    private routes(){
        this._router.post(
            '/', 
            passport.authenticate('jwt', {session: false}),
            ConsultController.CreateConsult)

        this._router.get(
            '/byUser',
            passport.authenticate('jwt', {session: false}),
            ConsultController.GetConsultByUser
        )

        this._router.get(
            '/byPet/:id',
            passport.authenticate('jwt', {session: false}),
            ConsultController.GetConsultByPet
        )

        this._router.delete(
            '/:id',
            passport.authenticate('jwt', {session: false}),
            ConsultController.CancelConsult
        )
    }


}

export default ConsultRouter
import express, { IRouter } from "express";
import passport from "passport";
import PetController from "../controllers/pet.controller";

class PetRouter {
    public _router: IRouter

    constructor(){
        this._router = express.Router()
        this.routes()
    }

    private routes(){
        this._router.get(
            '/',
            passport.authenticate('jwt', {session: false}),
            PetController.GetAllPets
            )
        this._router.post(
            '/',
            passport.authenticate('jwt', {session: false}),
            PetController.CreatePet
            )
        this._router.get(
            '/:id',
            passport.authenticate('jwt', {session: false}),
            PetController.GetPet
            )
        this._router.delete(
            '/:id',
            passport.authenticate('jwt', {session: false}),
            PetController.DeletePet
            )
    }


}

export default PetRouter
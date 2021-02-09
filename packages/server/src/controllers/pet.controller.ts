import {Request, Response} from 'express'
import { checkCamps } from '../helpers/pet_checks'
import { Pet } from '../entities/Pet'
import { User } from '../entities/User'
class PetController {
    public static async GetAllPets(req: Request, res: Response): Promise<Response>{
       try{
            const user = await User.findOne({where:{id: req.user}})
            const pets: Pet[] = await Pet.find({where:{user: user}})

            return res.status(200).json({
                ok: true,
                pets
            })
       }
       catch(e){
            return res.status(200).json({
                ok: false,
                message: 'Internal server error'
            })
       }
    }

    public static async CreatePet(req: Request, res: Response): Promise<Response>{
        const campsChecked = checkCamps(req.body.name, req.body.age, req.body.race)
        if(campsChecked){
            return res.status(200).json({
                ok: false,
                message: 'Invalid camps'
            })
        }
        const user = await User.findOne({where:{id: req.user}})
        const pet = {
            name: req.body.name,
            age: parseInt(req.body.age),
            race: req.body.race,
            user: user
        }
        
        const returned = await Pet.create(pet).save()
        return res.status(200).json({
            ok: true,
            pet: returned
        })
    }
}

export default PetController
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

    public static async GetPet(req: Request, res:Response): Promise<Response>{
        const id: string = req.params.id
        if (id == null){
            return res.status(400).json({
                ok: false,
                message: 'Please send a ID'
            })
        }
        const pet: Pet[] = await Pet.find({where:{id}})

        if (pet.length < 1) return res.json({
            ok: false,
            message: 'ID not found'
        })
        return res.json({
            ok: true,
            pet
        })
    }

    public static async DeletePet(req: Request, res:Response): Promise<Response>{
        const id: string = req.params.id
        if (id == null){
            return res.status(400).json({
                ok: false,
                message: 'Please send a ID'
            })
        }
        const pet = await Pet.createQueryBuilder()
                                .delete()
                                .where("id = :id", { id: id })
                                .execute();
        if (!pet.affected) return res.json({
            ok: false,
            message: 'ID not found'
        })
        return res.json({
            ok: true,
            message: "Pet deleted"
        })
    }

}

export default PetController
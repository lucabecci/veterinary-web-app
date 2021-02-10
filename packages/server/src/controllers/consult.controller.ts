import {Request, Response} from 'express'
import { Consult } from '../entities/Consult'
import { Pet } from '../entities/Pet'
import { User } from '../entities/User'
class ConsultController {
    public static async CreateConsult(req: Request, res: Response): Promise<Response>{
        const date = new Date()
        const user = await User.findOne({where:{id: req.user}})
        const pet = await Pet.findOne({where:{id: req.body.pet}})
        try{
            const consult = await Consult.create({
                problem: req.body.problem,
                description: req.body.description,
                date: date,
                hour: date.getHours(),
                user,
                pet
            }).save()

            if (!consult) {
                return res.status(400).json({
                    ok: false,
                    message: "Error to create your consult"
                })
            }

            return res.status(200).json({
                ok: true,
                consult
            })
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                ok: false,
                consult: "Internal server error"
            })
        }
    }
    public static async GetConsultByUser(req: Request, res: Response): Promise<Response>{
        try{
            const id = req.user
            const user = await User.findOne({where: {id}})
            const consults = await Consult.find({where: {user}})
            if(consults.length < 1){
                return res.status(400).json({
                    ok: false,
                    consult: "You dont have a consults"
                })
            }
            return res.status(200).json({
                ok: true,
                consults
            })
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                ok: false,
                consult: "Internal server error"
            })
        }
    }
    public static async GetConsultByPet(req: Request, res: Response): Promise<Response>{
        try{
            const id = req.params.pet
            const pet = await Pet.findOne({where: {id}})
            const consults = await Consult.find({where: {pet}})
            if(consults.length < 1){
                return res.status(400).json({
                    ok: false,
                    consult: "Your pet dont have a consults"
                })
            }
            return res.status(200).json({
                ok: true,
                consults
            })
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                ok: false,
                consult: "Internal server error"
            })
        }
    }
    public static async CancelConsult(req: Request, res: Response): Promise<Response>{
        try{
            const id = req.params.id

            const consultDeleted = await Consult.delete({id})

            if(!consultDeleted.affected){
                return res.status(400).json({
                    ok: false,
                    message: "Error to cancel your consult"
                })
            }

            return res.status(200).json({
                ok: true,
                message: "Consult canceled"
            })
        }
        catch(e){
            return res.status(500).json({
                ok: false,
                message: "Internal server error"
            })
        }
    }
}

export default ConsultController
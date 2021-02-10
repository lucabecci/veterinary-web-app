import {Request, Response} from 'express'
import bcrypt from 'bcrypt'
import { checkEmail, checkPassword, checkRegister } from '../helpers/register_checks'
import { User } from '../entities/User'
import { checkLogin } from '../helpers/login_checks'
import JwtHelper from '../helpers/jwt_helper'
class UserController {
    public static async Register(req: Request, res: Response): Promise<Response>{
        try{
            const user = {
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: req.body.password,
                registered: 'jwt'
            }
            const campsChecked = checkRegister(user.email, user.firstName, user.lastName, user.password)
            if(campsChecked){
                return res.status(400).json({
                    success: false,
                    message: 'Please send all camps'
                })
            }
            const emailChecked = checkEmail(user.email)
            if (emailChecked){
                return res.status(400).json({
                    success: false,
                    message: 'Please send a valid email'
                })
            }
            const passwordChecked = checkPassword(user.password)
            if (passwordChecked){
                return res.status(400).json({
                    success: false,
                    message: 'Please send a valid password'
                })
            }
            const emailExists = await User.findOne({where: {email: user.email}})
            console.log(emailExists)
            if(emailExists){
                return res.status(400).json({
                    success: false,
                    message: 'Email already in use'
                })
            }
            const hash = await bcrypt.hash(user.password, 10);
            user.password = hash
            const newUser = await User.create({
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                password: user.password,
                registered: user.registered
            })
            .save()
    
            return res.status(200).json({
                success: true,
                newUser
            })
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                success: false,
                message: 'Internal server error'
            })
        }
    }

    public static async Login(req: Request, res: Response): Promise<Response>{
        const userToLogin = {
            email: req.body.email,
            password: req.body.password
        }

        const campsChecked = checkLogin(userToLogin.email, userToLogin.password)
        if(campsChecked){
            return res.status(400).json({
                success: false,
                message: 'Please send all camps'
            })
        }

        const userExists = await User.findOne({where: {email: userToLogin.email}})
        if(!userExists){
           return res.status(400).json({
               success: false,
               message: 'User doesnt exists'
           }) 
        }

        const valid = await bcrypt.compare(userToLogin.password, userExists.password);
        if (!valid) {
            return res.status(400).json({
                success: false,
                message: 'Invalid password'
            }) 
        }

        const token = await JwtHelper.createToken(userExists.id)

        return res.status(200).json({
            success: true,
            token
        })
    }

    public static async Account(req: Request, res: Response): Promise<Response>{
        try{
            const id = req.user
            const user = await User.findOne({where:{id}})
            const userReturn ={
                email: user?.email,
                firstName: user?.firstName,
                lastName:user?.lastName
            }
            return res.status(200).json({
                ok: true,
                user: userReturn
            })
        }

        catch(e){
            return res.status(500).json({
                ok: false,
                message: 'Internal server error'
            })
        }
    }

    public static async IsLoggedIn(req: Request, res: Response): Promise<Response>{
        try{
            const id = req.user
            const user = await User.findOne({where:{id}})
            const userReturn ={
                userId: user?.id,
                email: user?.email,
                firstName: user?.firstName,
                lastName:user?.lastName
            }
            return res.status(200).json({
                ok: true,
                user: userReturn
            })
        }

        catch(e){
            return res.status(500).json({
                ok: false,
                message: 'Internal server error'
            })
        }
    }
}

export default UserController
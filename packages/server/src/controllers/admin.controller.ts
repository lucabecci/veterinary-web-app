import {Request, Response} from 'express'
class AdminController {
    public static async Login(req: Request, res: Response): Promise<void>{
        console.log('route')
    }
}

export default AdminController
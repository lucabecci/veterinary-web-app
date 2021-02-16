import {Request, Response} from 'express'
class AdminController {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public static async Login(_req: Request, _res: Response): Promise<void>{
        console.log('route')
    }
}

export default AdminController
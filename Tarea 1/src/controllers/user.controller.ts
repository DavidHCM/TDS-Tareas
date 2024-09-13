import { Request, Response } from 'express';

class UserController {
    listAll(req: Request, res: Response) {
        res.send('Lista de usuarios');
    }
}

export const userController = new UserController();
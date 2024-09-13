import { Request, Response, NextFunction } from 'express';
import { User } from '../types/user';

// Usuarios hardcodeados
const users: { [key: string]: User } = {
    'pancho1': {
        id: '1',
        name: 'pancho',
        email: 'pancho@iteso.com',
        role: 'admin'
    },
    'juan2': {
        id: '2',
        name: 'juan',
        email: 'juan@iteso.com',
        role: 'gerente'
    },
    'mortal3': {
        id: '3',
        name: 'mortal',
        email: 'mortal@iteso.com',
        role: 'cliente'
    }
};

// Middleware que verifica si el usuario tiene un rol permitido
export function roles(rolPermitido: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        const key = req.query.key as string;
        const usuario = users[key];

        if (usuario && rolPermitido.includes(usuario.role)) {
            return next();
        }

        res.sendStatus(403);
    };
}

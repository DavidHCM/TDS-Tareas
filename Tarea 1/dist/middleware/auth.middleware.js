"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roles = roles;
// Usuarios hardcodeados
const users = {
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
function roles(rolPermitido) {
    return (req, res, next) => {
        const key = req.query.key;
        const usuario = users[key];
        if (usuario && rolPermitido.includes(usuario.role)) {
            return next();
        }
        res.sendStatus(403);
    };
}

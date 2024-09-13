"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
class UserController {
    listAll(req, res) {
        res.send('Lista de usuarios');
    }
}
exports.userController = new UserController();

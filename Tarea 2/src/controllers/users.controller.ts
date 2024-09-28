import { Request, Response } from 'express';
import User from './../models/user.model';
import {HTTP_STATUS} from '../types/http-status-codes';
import {User as UserType} from '../types/user';
// @ts-ignore
import jwt from 'jsonwebtoken';
// @ts-ignore
// de nuevo entra el ts-ignore para que no me marque error en bcrypt por que no conozco el tipo de dato
import bcrypt from 'bcrypt';

class UsersController {
    async getAll(req: Request, res: Response) {
        try {
            const results = await User.find({});
            res.send(results);
        } catch (err) {
            console.log(HTTP_STATUS.NOT_FOUND);
        }
    }



    async login(req: Request, res: Response) {

        try {
            const { email, password }: UserType = req.body;
            const secretKey = process.env.SUPER_SECRET_KEY;
            if (!email || !password) {
                return res.status(HTTP_STATUS.BAD_REQUEST).send({ message: 'Missing required fields' });
            }

            const expectedUser = await User.findOne({ email });
            if (!expectedUser) {
                return res.status(HTTP_STATUS.NOT_FOUND).send({ message: 'User not found' });
            }


            const forbiddenStatuses = ['inactive', 'deleted', 'archived'];
            if (forbiddenStatuses.includes(expectedUser.status)) {
                return res.status(HTTP_STATUS.AUTH_ERROR).send({ message: 'User account is not active' });
            }

            const isPasswordValid = await bcrypt.compare(password, expectedUser.password);
            if (!isPasswordValid) {
                return res.status(HTTP_STATUS.AUTH_ERROR).send({ message: 'Invalid credentials' });
            }

            // Me confundio un poco la instruccion que dice la tarea ya que no estoy seguro donde dice que en el caso donde se encuentre el usuario
            // con base en el correo y la contraseña se debe generar el token del usuario, pero deberia de ir la contraseña en el token, o deberia de excluirse por temas de seguridad?
            const token = jwt.sign({ email: expectedUser.email, password: expectedUser.password, role: expectedUser.role}, secretKey as string, { expiresIn: '1h' });

            res.status(HTTP_STATUS.SUCCESS).send({ token, message: 'Login successful' });
        }
        catch (err) {
            console.error('Error in auth middleware:', err);
            return res.status(HTTP_STATUS.SERVER_ERROR).send({ message: 'Server error' });
        }

    }
}

const controller = new UsersController();

export default controller;


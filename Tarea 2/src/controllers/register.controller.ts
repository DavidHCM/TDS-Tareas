import { Request, Response } from 'express';
// @ts-ignore
// El ts-ignore es para que no me marque error en bcrypt por que no conozco el tipo de dato
import bcrypt from 'bcrypt';
import User from './../models/user.model';
import {HTTP_STATUS} from '../types/http-status-codes';
import {User as UserType} from '../types/user';

class RegisterController {
    async register(req: Request,res: Response){
        try {
            const { name, email, password, role, status }: UserType = req.body;

            if (!name || !email || !password || !role) {
                return res.status(HTTP_STATUS.BAD_REQUEST).send({ message: 'Missing required fields' });
            }

            const existingUser = await User.findOne({email});
            if(existingUser){
                return res.status(HTTP_STATUS.CONFLICT).send({message: 'User already exists'});
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newStatus = status || 'new';
            const newUser = new User({
                name,
                email,
                password: hashedPassword,
                role,
                status: newStatus
            });

            await newUser.save();

            res.send({ message: 'User registered successfully'});
        } catch (err) {
            console.log(HTTP_STATUS.NOT_FOUND);
        }
    }

}

const registerController = new RegisterController();

export default registerController;


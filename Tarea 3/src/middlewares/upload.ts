import {Request} from 'express'
import multer , {diskStorage, FileFilterCallback} from 'multer';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

const permitedTypes = ['application/pdf'];

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const isValid = permitedTypes.includes(file.mimetype);
    cb(null, isValid);
};

const storage = diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'documents');
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop();
        const timestamp = new Date().getTime();

        // Tuve que hacer un uuid por que me sucedio lo que comentaron en clase que
        // dos documentos tomaron el mismo timestamp y se sobrescribian y solo se guardaba uno
        const uniqueSuffix = `${uuidv4()}-${timestamp}`;
        cb(null, `${uniqueSuffix}.${ext}`);
    }
});

const upload = multer({ storage, fileFilter });

export default upload;
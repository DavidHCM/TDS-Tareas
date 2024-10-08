import  { Router } from 'express';
import upload from './../middlewares/upload';
import path from 'path';
import fs from 'fs';

const router = Router();

router.post('/uploads', (req, res, next) => {
    upload.array('docs', 10)(req, res, (err) => {
        if (req.files && (req.files as Express.Multer.File[]).length !== 0) {
            const filesInfo = (req.files as Express.Multer.File[]).map(file => ({
                fieldName: file.fieldname,
                originalName: file.originalname,
                mimeType: file.mimetype,
                size: file.size,
                fileName: file.filename,
                path: file.path
            }));
            res.json({ files: filesInfo });
        } else {
            res.status(400).send('Carga no satisfactoria');
        }
    });
});

router.get('/download', (req, res, next) => {
    const fileName = req.query.fileName as string;
    const filePath = path.join('documents', fileName);

    if (fs.existsSync(filePath)) {
        res.download(filePath, (err) => {
            if (err) {
                next(err);
            }
        });
    } else {
        res.status(404).send('File not found');
    }
});


export default router;


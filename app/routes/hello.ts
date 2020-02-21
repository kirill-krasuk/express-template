import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    res.render('hello', {
        name: 'Kirill'
    });
});

export default router;

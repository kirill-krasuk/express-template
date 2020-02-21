import express, { Request, Response } from 'express';

const router  = express.Router();

router.get('/list', (_req: Request, res: Response) => {
    res.render('friends', {
        hasFriends: true,
        list      : [
            { name: 'VitahaLoh', age: 22 },
            { name: 'IgorBoh', age: 22 },
            { name: 'YarikPoh', age: 22 },
            { name: 'BodyaTop', age: 22 },
            { name: 'KolyanBikini', age: 22 }
        ]
    });
});

router.get('/two', (_req: Request, res: Response) => {
    res.render('friends', {
        hasFriends: false,
        list      : [
            { name: 'VitahaLoh', age: 22 },
            { name: 'IgorBoh', age: 22 },
        ]
    });
});

export default router;

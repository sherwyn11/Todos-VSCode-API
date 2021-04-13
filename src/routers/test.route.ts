import { Router, Request, Response } from 'express';

const testRouter: Router = Router();

testRouter.route('/test-route').get((_req: Request, res: Response) => {
    res.status(200).send({ message: 'Test Works!' });
});

export default testRouter;
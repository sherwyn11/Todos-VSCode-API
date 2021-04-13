import { Router, Request, Response } from 'express';

const authRouter: Router = Router();

authRouter.route('/login').post((_req: Request, res: Response) => {
  res.status(200).send('Login Works!');
});

authRouter.route('/logout').post((_req: Request, res: Response) => {
  res.status(200).send('Logout Works!');
});

export default authRouter;

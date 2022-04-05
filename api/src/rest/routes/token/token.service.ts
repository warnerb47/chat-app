import { NextFunction, Request, Response } from 'express';
import { verify, sign } from 'jsonwebtoken';
import { IUser } from '../../../interfaces';

export const authenticateToken = (req: Request, res: Response, next: NextFunction): Response | undefined => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
      return res
        .status(401)
        .send({data:"Vous devez vous authentifier pour effectuer cette opération"});
    }

    verify(token, process.env['TOKEN_SECRET'] || 'secret_not_avaible', (err, credential) => {
      if (err) {
        console.log(err);
        return res.status(403).send({data:"Votre token est invalide"});
      }
      (req as any).credential = credential;
      next();
    });
};

export const generateAccessToken = (credential: IUser): string => {
    return sign(credential, process.env['TOKEN_SECRET'] || 'secret', { expiresIn: "2d" });
};


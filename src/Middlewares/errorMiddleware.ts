import type { NextFunction, Request, Response } from 'express';

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err?.stack ?? err);

  const status = err?.status && typeof err.status === 'number' ? err.status : 500;
  const message = process.env.NODE_ENV === 'production' ? 'Erreur interne du serveur' : err?.message ?? 'Erreur interne';

  res.status(status).json({
    success: false,
    message
  });
};

export default errorMiddleware;

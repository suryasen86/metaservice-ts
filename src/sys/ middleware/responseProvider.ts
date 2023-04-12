import { NextFunction, Request, Response } from 'express';
declare global {
  namespace Express {
    interface Response {
      success: (options: { code: number, message: string, data: any }) => void;
      error: (options: { code: number, message?: string | boolean, errors: any }) => void;
      noContent: () => void;
    }
  }
}

interface CustomResponse extends Response {
  success: (options: { code: number, message: string, data: any }) => void;
  error: (options: { code: number, message?: string | boolean, errors: any }) => void;
  noContent: () => void;
}

const responseProvider = (req: Request, res: CustomResponse, next: NextFunction) => {
  res.success = ({ code, message, data }: { code: number, message: string, data: any }) => {
    res.locals.data = { code, message, data };
    next();
  };
  
  res.error = ({ code, message = false, errors = null }: { code: number, message?: string | boolean, errors: any }) => {
    message = message ? message : "Technical issue,Please try again After some time";
    res.locals.data = { code, message, errors };
    res.locals.status = code;
    next();
  };

  res.noContent = () => {
    res.locals.data = { code: 204 };
    res.locals.status = 204;
    next();
  };

  next();
};

export default responseProvider;

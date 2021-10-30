import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if(!authToken){
    return response.status(401).json({ 
      errorCode: "token.invalid",
    });
  }

  // Bearer 4564f56ds4fds56f4ds5646f5ds
  // [0] Bearer
  // [1] 4564f56ds4fds56f4ds5646f5ds
  
  const [, token] = authToken.split(" ")

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload

    request.user_id = sub;

    return next();

  }catch (err) {
    return response.status(401).json({errorCode: "token.expired"})
  }


}
import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers.authorization) {
      // todo check Authorization after
      next();
    } else {
      throw new UnauthorizedException('Authorization header is missing');
    }
  }
}

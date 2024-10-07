import { CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { Observable } from "rxjs";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest();
        const token = this.checkToken(req);
        if (!token) {
            throw new UnauthorizedException();
        }
        try {

            const payload = this.jwtService.verify(token);
            req['userId'] = payload.userId;
        } catch (error) {
            Logger.error(error);
            throw new UnauthorizedException();

        }
        return true;
    }

    private checkToken(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
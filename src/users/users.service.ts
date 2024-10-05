import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto, UserDto } from './users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { compareSync, hashSync } from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
        private jwtService: JwtService
    ) { }
    async signUp(user: UserDto) {
        const isMatch = await this.usersRepository.findOne({ where: { email: user.email } });
        if (isMatch)
            throw new BadRequestException('Email already exists');
        const hashPass = hashSync(user.password, 10);
        const newUser = this.usersRepository.create({ ...user, password: hashPass });
        await this.usersRepository.save(newUser);
    }

    async login(credentials: LoginDto) {
        const { email, password } = credentials;
        const isUser = await this.usersRepository.findOne({ where: { email } });
        if (!isUser || !compareSync(password, isUser.password))
            throw new UnauthorizedException('Invalid email or password');
        ;
        return {
            'access_token': this.generateToken(isUser.id),
            'user_email': isUser.email
        }
    }

    generateToken(userId: number) {
        return this.jwtService.sign(userId.toString());
    }

}

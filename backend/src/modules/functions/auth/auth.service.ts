import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/modules/models/users/users.service';
import { CreateUserDto } from 'src/modules/models/users/dto/create-user.dto';
import axios from 'axios';
import { SocialLoginRequestDto } from './dto/social-login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async jwtLogIn(data: LoginAuthDto) {
    const existedAccount = await this.usersService.findOneByEmail(data.email);
    const validatePassword: boolean = await bcrypt.compare(
      data.password,
      existedAccount.password,
    );
    if (!existedAccount || !validatePassword) {
      throw new UnauthorizedException();
    }
    const payload = { email: data.email, sub: existedAccount.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async jwtRegister(data: CreateUserDto) {
    const existedAccount = await this.usersService.findOneByEmail(data.email);

    if (existedAccount) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    data.password = await bcrypt.hash(data.password, 10);
    await this.usersService.create(data);
  }

  async login(data: SocialLoginRequestDto) {
    let userData;
    switch (data.vendor) {
      case 'kakao': {
        userData = await this.getUserByKakaoAccessToken(data.accessToken);
        break;
      }
      case 'naver': {
        userData = await this.getUserByNaverAccessToken(data.accessToken);
        break;
      }
      default: {
        throw new UnauthorizedException('invalid vendor'); //소셜로그인 선택 실패 예외처리
      }
    }
    // console.log('userData', userData);
    const payload = {
      email: userData.email,
      name: userData.name,
      sub: userData.userId,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async getUserByKakaoAccessToken(token: string) {
    const user: any = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!user) {
      throw new UnauthorizedException('invalid kakao access token');
    }
    const userId = await this.usersService.findOneByEmail(
      user.data.kakao_account.email,
    );
    if (!userId) {
      const dataForCreateUser = {
        email: user.data.kakao_account.email,
        name: user.data.properties.nickname,
      };
      const newUser = await this.usersService.socialCreate(dataForCreateUser);
      return newUser;
    }
    return userId;
  }

  async getUserByNaverAccessToken(token: string) {
    const user: any = await axios.get('https://openapi.naver.com/v1/nid/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!user) {
      throw new UnauthorizedException('invalid naver accesstoken');
    }
    //이후 기능은 더  구현해야함.
    const userId = await this.usersService.findOneByEmail(
      user.data.kakao_account.email,
    );
    if (!userId) {
      const dataForCreateUser = {
        email: user.data.kakao_account.email,
        name: user.data.properties.nickname,
      };
      const newUser = await this.usersService.socialCreate(dataForCreateUser);
      return newUser;
    }
    return user;
  }
}

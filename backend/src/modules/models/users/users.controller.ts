import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/modules/functions/auth/auth.service';
import { LoginAuthDto } from 'src/modules/functions/auth/dto/login-auth.dto';
import { SocialLoginRequestDto } from 'src/modules/functions/auth/dto/social-login-auth.dto';

@ApiTags('user')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  // @ApiOperation({
  //   description: '로그인 하기',
  //   summary: '로그인',
  // })
  // @Post('login')
  // async logIn(@Body() body: LoginAuthDto) {
  //   return await this.authService.jwtLogIn(body);
  // }

  @ApiOperation({
    description: '소셜로그인 하기',
    summary: '소셜로그인',
  })
  @Post('login')
  async logIn(@Body() body: SocialLoginRequestDto) {
    // console.log('data', body);
    return await this.authService.login(body);
  }

  @ApiOperation({
    deprecated: true,
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.jwtRegister(createUserDto);
    // return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginAuthDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    example: 'novelist0001@gmail.com',
    description: '이메일',
    required: true,
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'userPassword',
    description: '비밀번호',
    required: true,
  })
  password: string;
}

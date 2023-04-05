import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medal } from './modules/models/medals/entities/medal.entity';
import { User } from './modules/models/users/entities/user.entity';
import { AuthModule } from './modules/functions/auth/auth.module';
import { MedalsModule } from './modules/models/medals/medals.module';
import { UsersModule } from './modules/models/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: 3306,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DBNAME,
      entities: [Medal, User],
      synchronize: true,
    }),
    AuthModule,
    MedalsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

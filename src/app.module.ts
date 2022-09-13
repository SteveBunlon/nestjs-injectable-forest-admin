import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ForestModule } from './forest/forest.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/user.entity';
import { UserModule } from './users/user.module';
import { UserService } from './users/user.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5435,
      username: 'forest',
      password: 'secret',
      database: 'blog',
      entities: [User],
      synchronize: true,
      logging: ['query'],
    }),
    ForestModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [UserService, AppService],
})
export class AppModule {}

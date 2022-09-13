import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ForestModule } from './forest.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './user.entity';
import { UserModule } from './user.module';
import { UserService } from './user.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5435,
      username: 'forest',
      password: 'secret',
      database: 'example_app',
      entities: [User],
      synchronize: true,
    }),
    ForestModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [UserService, AppService],
})
export class AppModule {}

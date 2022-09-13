import { Module } from '@nestjs/common';
import { ForestService } from './forest.service';
import { UserModule } from './user.module';

@Module({
  imports: [UserModule],
  providers: [ForestService],
  exports: [ForestService],
})
export class ForestModule {}

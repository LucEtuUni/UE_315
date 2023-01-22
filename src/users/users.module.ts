import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users, UserSchema } from './schemas/user.schema';
import { forwardRef } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }])

  ],
  controllers: [UsersController],
  providers: [
    UsersService,
  
  ]
})
export class UsersModule {}
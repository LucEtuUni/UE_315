import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name)
    private usersModel: Model<UserDocument>
) { }

 createUser(createUserDto: CreateUserDto) {
  return new this.usersModel({
       ...createUserDto,
       createdAt: new Date(),
      updatedAt: new Date(),
    }).save();
  }

  findAll(){
    return this.usersModel.find();
  }

  async findOne(id: string): Promise<Users> {
    return await this.usersModel.findById(id).exec();  
   }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.usersModel.update({ _id: id }, updateUserDto);
  }

  async remove(id: string) {
    await this.usersModel.findByIdAndDelete(id);
  }

}


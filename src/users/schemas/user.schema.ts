import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Users>;

@Schema()
export class Users {
 @Prop()
  firstname: string;

  @Prop()
  lastname: string;

 @Prop()
  public email: string;

  @Prop()
  public password: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

}

export const UserSchema = SchemaFactory.createForClass(Users);
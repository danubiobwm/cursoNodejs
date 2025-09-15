import { UserEntity } from "../entities/user.entity";

export interface IUserRepository {
  findByUsername(users: string):Promise<UserEntity | undefined>;
  save(data: UserEntity): Promise<UserEntity>;
}
import { UserEntity } from "../../entities/user.entity";
import { IUserRepository } from "../user.repository";

export class UserPrismaRepository implements IUserRepository {
  findByUsername(username: string): Promise<UserEntity | undefined> {
    throw new Error("Method not implemented.");
  }
  save(data: UserEntity): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }

}
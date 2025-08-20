import { UserEntity } from "../entities/user.entity";

export class UserRepository {

  users: UserEntity[]
  private static instance: UserRepository;

  constructor() {
    this.users = [];
  }

  static getInstance(): UserRepository {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository();
    }
    return UserRepository.instance;
  }



  async findByUsername(username: string): Promise<UserEntity | null> {
    const user = this.users.find(user => user.username === username);
    return user || null;
  }
  async save(data: UserEntity){
    this.users.push(data);
    return data;
  }
}
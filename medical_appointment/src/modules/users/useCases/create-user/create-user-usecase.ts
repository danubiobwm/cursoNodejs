import { UserEntity } from "../../entities/user.entity";
import { UserMemoryRepository } from "../../repositories/implementations/user.memory.repository";



type UserRequest = {
  name: string;
  username: string;
  password: string;
};



export class CreateUserUseCase {

  constructor(private userRepository: UserMemoryRepository) {}

  async execute(data: UserRequest) {
    const user = UserEntity.create(data);


    if(!data.username || !data.password) {
      throw new Error("Username and password are required");
    }

    const existingUser = await this.userRepository.findByUsername(data.username);
    if (existingUser) {
      throw new Error("Username already exists");
    }

    const userCreate = await this.userRepository.save(user);

    return userCreate;

  }
}
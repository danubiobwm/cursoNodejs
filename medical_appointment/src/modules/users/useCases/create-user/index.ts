
import { UserMemoryRepository } from "../../repositories/implementations/user.memory.repository";
import { CreateUserController } from "./create-user-controller";

const userMemoryRepository = new UserMemoryRepository();
const createUserController = new CreateUserController(userMemoryRepository);

export { createUserController };
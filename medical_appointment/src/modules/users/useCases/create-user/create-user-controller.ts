import { Request, Response } from "express";
import { CreateUserUseCase } from "./create-user-usecase";
import { logger } from "../../../../utils/log";
import { UserMemoryRepository } from "../../repositories/implementations/user.memory.repository";

export class CreateUserController {

   constructor(private userRepository: UserMemoryRepository) {}

  async handle(request: Request, response: Response) {
    logger.info("Create User - handle - start");

    try {
      const data = request.body;
      const useCase = new CreateUserUseCase(this.userRepository);

      const result = await useCase.execute(data);
      return response.json(result)
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
      return response.status(500).json({ error: "Internal server error" });
    }

  }
}
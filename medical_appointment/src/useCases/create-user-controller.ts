import { Request, Response } from "express";
import { CreateUserUseCase } from "./create-user-usecase";

export class CreateUserController {

  async handle(request: Request, response: Response) {
    try {
      const data = request.body;
      const useCase = new CreateUserUseCase();

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
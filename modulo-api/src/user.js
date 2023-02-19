const {createHmac} = require('crypto')
const UserRepository = require("./repositories/userRepository");

class User {
  constructor() {
    this.users = [];
    this.userRepository = new UserRepository();
  }

  async create(body) {
    const {password} = body;
    const pwdEncrypt = createHmac('sha1', password).digest("hex")

    const user ={
      ...body,
      password: pwdEncrypt
    }
    const users = await this.userRepository.create(user);
    return users;
  }

  async findAll() {
    return this.userRepository.findAll();
  }

  async update(body, id) {
    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new Error("Usuário não Encontrado!");
    }

    const {password} = body;
    const pwdEncrypt = createHmac('sha1', password).digest("hex")

    const user ={
      ...body,
      password: pwdEncrypt
    }

    await this.userRepository.update(user, id);
  }
}

module.exports = new User();

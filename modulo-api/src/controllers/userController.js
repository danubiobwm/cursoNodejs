const User = require("../user");

class UserController {
  async post(request, response) {
    const { body } = request;
    const result = await User.create(body);
    return response.end(JSON.stringify(result));
  }

  async get(request, response) {
    const result = await User.findAll();
    return response.end(JSON.stringify(result));
  }

  async put(request, response) {
    const { id } = request.params;
    const { body } = request;

    console.log(body);

    try {
      await User.update(body, id);
      return response.end(
        JSON.stringify({
          msg: "Usuário alterado com sucesso!",
        })
      );
    } catch (err) {
      console.log("Error:", err);
      return response.end(
        JSON.stringify({
          msg: err.message,
        })
      );
    }
  }
}

module.exports = { UserController };

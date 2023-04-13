import UserValidate from "../../domain/validate/UserValidate.js";
import UserService from "../../domain/services/UserService.js";

class UserController {
  constructor() {
    this.userService = UserService;
  }

  async createUser(req, res) {
    try {
      const user = req.body;

      const validatedData = await UserValidate.validateAsync(user);

      const emailExists = await this.userService.getUserByEmail(user.email);

      if (!emailExists) {
        const newUser = await this.userService.createUser(validatedData);
        res
          .status(201)
          .json({ message: "Successfully registered user", data: newUser });
      } else {
        res.status(400).json({ message: "Entered email already exists" });
      }
    } catch (error) {
      if (error.isJoi) {
        res.status(400).json({ message: error.details[0].message });
      } else {
        res.status(500).json({ message: "Error when creating a new user" });
      }
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao listar registros" });
    }
  }
}

export default new UserController();

import UserRepository from "../../domain/repositories/UserRepository.js";

class UserService {
  constructor() {
    this.userRepository = UserRepository;
  }

  async createUser(user) {
    await this.userRepository.save(user);
    return user;
  }

  async getAllUsers() {
    return this.userRepository.findAll();
  }

  async getUserByEmail(email) {
    return this.userRepository.findByEmail(email);
  }
}

export default new UserService();

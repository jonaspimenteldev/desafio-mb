import User from "../models/User.js";

class UserRepository {
  async save(user) {
    const newUser = new User(user);
    await newUser.save();
    return newUser;
  }

  async findAll() {
    const users = await User.find();
    return users;
  }

  async findByEmail(email) {
    const existingUser = await User.findOne({ email });
    return existingUser;
  }
}

export default new UserRepository();

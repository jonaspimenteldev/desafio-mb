const { ObjectId } = require('mongodb');
const { getDatabase } = require('../../database');
const User = require('../models/User');

class UserRepository {
  async findAll() {
    const users = await getDatabase().collection('users').find().toArray();
    return users.map((user) => new User(user));
  }

  async findById(id) {
    const user = await getDatabase()
      .collection('users')
      .findOne({ _id: new ObjectId(id) });
    return user ? new User(user) : null;
  }

  async create(data) {
    const result = await getDatabase()
      .collection('users')
      .insertOne(new User(data));
    return new User({ ...data, _id: result.insertedId });
  }

  async update(id, data) {
    const result = await getDatabase()
      .collection('users')
      .updateOne({ _id: new ObjectId(id) }, { $set: data });
    return result.modifiedCount;
  }

  async delete(id) {
    const result = await getDatabase()
      .collection('users')
      .deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount;
  }
}

module.exports = UserRepository;

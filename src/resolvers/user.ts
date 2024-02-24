import User from "../models/user.js";

export const resolver = {
  getUser: async () => {
    const users = await User.find();
    return users;
  },
  getUserByName: async (name: { name: string }) => {
    try {
      const user = await User.findOne(name);
      if (!user) {
        return {};
      }
      return user;
    } catch (error) {
      return error;
    }
  },
  addUser: async ({ user: userInput }: { user: UserDto }) => {
    try {
      const user = await User.create(userInput);
      return user;
    } catch (error) {
      return error;
    }
  },
  updateUser: async ({id: id, user:userInput}:{id: string, user: UserDto}  
  ) => {
    try {
      await User.updateOne({ _id: id }, userInput);
      return { result: "OK" };
    } catch (error) {
      return error;
    }
  },
  deleteUser: async (name: UserDto) => {
    try {
      await User.deleteOne(name);
      return { result: "OK" };
    } catch (error) {
      return { result: "Error" };
    }
  },
};

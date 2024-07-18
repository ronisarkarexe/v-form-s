import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: IUser): Promise<IUser> => {
  const result = await User.create(payload);
  return result;
};

const getAllUsers = async (): Promise<IUser[]> => {
  const result = await User.find({}).populate("appointments").populate("tests");
  return result;
};

const getUser = async (payload: string): Promise<IUser | null> => {
  const result = await User.findOne({ _id: payload })
    .populate("appointments")
    .populate("tests");
  return result;
};

const updateUser = async (userId: string, payload: Partial<IUser>) => {
  const result = await User.findOneAndUpdate({ _id: userId }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteUser = async (id: string): Promise<void> => {
  await User.deleteOne({ _id: id });
};

export const UserService = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};

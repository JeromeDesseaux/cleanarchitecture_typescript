import UserModel from "../models/user";

export class UserService {
    constructor() {}

    async signup(user) {
        const mongoUser = await UserModel.create(user);
        return { mongoUser };
    }
}

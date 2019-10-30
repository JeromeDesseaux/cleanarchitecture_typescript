import { UserService } from "./user";

test("UserService is defined", () => {
    const userService = new UserService();
    expect(userService).toBeDefined();
});

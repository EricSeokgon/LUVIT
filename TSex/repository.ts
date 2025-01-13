interface IUserRepository {
    save(name: string): IUser;


    findAll(): Array<IUser>; // IUser[]도 되고 Array<IUser>도 됩니다.


    findOne(userId: number): IUser;


    deleteUser(name: string): IUser | void;
}

import { IUser, user } from "./database";
import { IRepository } from "./repository";

export interface IRepository {

    // Define your interface methods here

};


class UserRepository implements IRepository {
    save(name: string): IUser {
        const newId = user.length + 1;


        const newUser: IUser = {
            userId: newId,
            name,
        };


        user.push(newUser);


        return newUser;
    }


    findAll(): Array<IUser> {
        return user;
    }


    findOne(userId: number): IUser {
        const result = user.filter((element) => element.userId == userId);


        return result[0];
    }


    deleteUser(name: string): IUser | void {
        const i = user.findIndex((element) => element.name == name);


        return user.splice(i, 1)[0];
    }
}

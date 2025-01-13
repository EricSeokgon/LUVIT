import { UserRepository } from "./repository.impl.v1";
import { IRepository } from "./repository";


const r: IUserRepository = new UserRepository();
console.log(r.save("kcs"));
console.log(r.findOne(1));
console.log(r.deleteUser("cys"));
console.log(r.findAll());

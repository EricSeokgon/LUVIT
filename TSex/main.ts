import { UserRepository } from "./repository.impl.v2";
import { IRepository } from "./repository";


const r: IUserRepository = new UserRepository();
console.log(r.save("khg"));
console.log(r.findOne(99));
console.log(r.deleteUser("cys"));
console.log(r.findAll());

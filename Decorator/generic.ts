interface IValue<T> {
    data: T;
}


const x: IValue<string> = {
    data: "hello",
};
const y: IValue<number> = {
    data: 98,
};
const z: IValue<boolean> = {
    data: true,
};

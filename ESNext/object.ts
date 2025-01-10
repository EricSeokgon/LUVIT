const book = {
    name: "typescript",
    publisher: "jpub",
};


console.log(book.name, book.publisher);

console.log({
    [1 * 2 * 3]: "hello world",
});


console.log({
    ["hello" + "world"]: "hello world",
});


function generateProperty(str: string): string {
    return str + "Key";
}


console.log({
    [generateProperty("typescript")]: "hello world",
});

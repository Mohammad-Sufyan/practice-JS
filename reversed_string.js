reversestring1 = ((str) => {
    return str.split("").reverse().join("");
})
console.log("1st: ", reversestring1("hello"));


reversestring2 = ((str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
})
console.log("2nd: ", reversestring2("sufyan"));

reversestring3 = ((str) => {
    return str.split("").reduce((reversed, char) => char + reversed, "");
})
console.log("3rd: ", reversestring3("javascript"));
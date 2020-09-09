let index = 1

let names = ["Niklas", "Oliver", "Abdinur", "Kevin"]

// for (let i = names.length - 1; i >= 0; i--){
//     console.log(names[i])
// }


let foundKevin = false;

while (!foundKevin) {
    if (names[index] === "Kevin"){
        foundKevin = true;
    }else {
        index++
    }
}

console.log("I found Kevin at index: " + index)
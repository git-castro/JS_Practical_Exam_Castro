// Task 1: Variables and Operations
var name = "Mark Froilan G. Castro";
var age = 25;
var city = "Baguio";
var year, ageCheck, remainder;

year = 2024 - age;

if (age >= 18){
    ageCheck = true;
}
else{
    ageCheck = false;
}

remainder = age % 5;

console.log("> Task 1: Variables and Operations");
console.log("Age: " + age)
console.log("Year: " + year);
console.log("Age greater than 18? " + ageCheck);
console.log("Remainder: " + remainder);

// Task 2: String Manipulation
var concat, upperCased, foundA;
concat = name + " from " + city;
newString = "This is a string.";

function upperCaseStr(string) {
    upperCased = string.toUpperCase();
    return upperCased;
}

function findA(nameKey, myString){
    let index = myString.indexOf(nameKey);
    if (index !== -1) {
        return "Letter 'a' found";
    } else {
        return "Letter 'a' not found.";
    }
}

console.log("> Task 2: String Manipulation");
console.log("Concatenation: " + concat);
console.log("Upper Case: " + upperCaseStr(newString));
console.log("Letter 'a': " + findA('a', newString));
var oldStr = "I am learning JavaScript at school.";
const newStr = oldStr.replace(/JavaScript/g, "JS");
console.log("Old String" + oldStr);
console.log("New String" + newStr);

// Task 3: Array Manipulation
var foods = ["Pizza", "Chicken", "Burger", "Pasta", "Sushi"];
console.log("> Task 3: Array Manipulation");
console.log("Array: " + foods);
foods.push("Salad");
console.log("Pushed Array: " + foods);
foods.splice(1,1);
console.log("Spliced Array: " + foods);
foods.sort();
console.log("Sorted Array: " + foods);
function printFoods(foodArray) {
    foodArray.forEach(food => {
        console.log(food);
    });
}
console.log("Printed Array: ")
printFoods(foods);
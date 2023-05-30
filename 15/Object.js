const person = {
    firstName: "semi",
    lastName: "dehal",
    age: 50,
    eyeColor: "blue",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
const t = person['lastName'];
console.log(t);
name = person.fullName();
console.log(name);
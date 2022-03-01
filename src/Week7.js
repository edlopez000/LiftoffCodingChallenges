// Older Than Me
// Create a method in the Person class which returns how another person's age compares.
// Given the instances p1, p2 and p3, which will be initialised with the attributes name and age,
// return a sentence in the following format:
// {other person name} is {older than / younger than / the same age as} me.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  compareAge = (otherPerson) => {
    if (this.age > otherPerson.age) {
      return `${otherPerson.name} is younger than me`;
    } else if (this.age < otherPerson.age) {
      return `${otherPerson.name} is older than me`;
    } else if (this.age === otherPerson.age) {
      return `${otherPerson.name} is the same age as me`;
    } else {
      return 'Something went wrong!';
    }
  };
}

module.exports = Person;

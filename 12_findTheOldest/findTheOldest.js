const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson;

    for (const person of people) {
        if (person.yearOfDeath == null) {
            person.yearOfDeath = new Date().getFullYear();
        }
        const age = person.yearOfDeath - person.yearOfBirth;
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

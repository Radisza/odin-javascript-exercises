const findTheOldest = function(people) {
    if (people.lenght == 0) {
        return undefined;
    }

    let oldest_person = people[0];
    let oldest_person_age = getAge(oldest_person.yearOfBirth, oldest_person.yearOfDeath);

    for (person of people) {
        let age = getAge(person.yearOfBirth, person.yearOfDeath);
        if (age > oldest_person_age) {
            oldest_person_age = age;
            oldest_person = person;
        } 
    }
    return oldest_person;
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    setFullName = function(newfirstName, newlastName) {
        this.firstName = newfirstName;
        this.lastName = newlastName;

    };
    getFullName() {
        return `${this.firstName} ${this.lastName} `
    };
}

class Student extends Person {

    constructor(firstName, lastName, id, grades) {
        super(firstName, lastName);
        this.id = id;
        this.grades = grades;
    }

    calculateAverage() {
        let average = 0;
        this.grades.forEach((grade) => {
            average += grade;
        });
        return average / this.grades.length;
    };

    displayInfo() {
        console.log(
            `Name: ${this.firstName}  ${
              this.lastName
            } , Average grade: ${this.calculateAverage()}`
        );
    };

    getAverage() {
        return this.calculateAverage
    };

}

let object1 = new Student("Varvara", "Baranchykava", 20897, [3, 4, 3, 4, 2]);
object1.getAverage()
object1.setFullName("Varysha", "Cry")
object1.getFullName()
object1.displayInfo();
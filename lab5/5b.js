function Student(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;

    this.calculateAverage = function() {
        let average = 0;
        this.grades.forEach((grade) => {
            average += grade;
        });
        return average / this.grades.length;
    };

    this.displayInfo = function() {
        console.log(
            `Name: ${this.firstName}  ${
          this.lastName
        } , Average grade: ${this.calculateAverage()}`
        );
    };
}

let object1 = new Student("Varvara", "Baranchykava", 20897, [3, 4, 3, 4, 2]);
object1.displayInfo();
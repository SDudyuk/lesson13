/*Task1*/
function Student(firstname, lastname, yearOfBirth) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.yearOfBirth = yearOfBirth;
    this.grades = [];
    this.attendances = [];
    this.courseName = '';
}

Student.prototype.addGrade = function (value) {
    this.grades.push(value);
};

Student.prototype.addAttendance = function (value) {
    this.attendances.push(value);
};

Student.prototype.getAvgGrade = function () {
    const sum = this.grades.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    return sum / this.grades.length;
};

Student.prototype.getAvgAttendance = function () {
    const sum = this.attendances.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    return sum / this.attendances.length;
};

Student.prototype.getCountLessons = function () {
    return this.attendances.length;
};

Student.prototype.changeCource = function (courseName) {
    this.courseName = courseName;
    this.grades = [];
    this.attendances = [];
};

Student.prototype.getStudentInfo = function () {
    console.log('student firstname:', this.firstname);
    console.log('student lastname:', this.lastname);
    console.log('student yearOfBirth:', this.yearOfBirth);
    console.log('course:', this.courseName);
    console.log('grades:', this.grades.toString());
    console.log('attendances:', this.attendances.toString());
};

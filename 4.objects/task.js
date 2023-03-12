"use strict"
function Student(name, gender, age){
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if ('marks' in this) {
    return this.marks.push(...marksToAdd);
  }
}

Student.prototype.getAverage = function () {
  if (!('marks' in this) || this.marks.length === 0) {
    return 0;
  }
  return Number((this.marks.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
  ) / this.marks.length).toFixed(2));
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

// Base class for general person details
class Person {
    constructor(name, id) {
      this.name = name;
      this.id = id;
    }
  
    getDetails() {
      return `Name: ${this.name}, ID: ${this.id}`;
    }
  }
  
  // Student class inheriting from Person
  class Student extends Person {
    constructor(name, id) {
      super(name, id); // Call the constructor of the parent class
      this.grades = []; // Encapsulation: grades are managed internally
    }
  
    addGrade(grade) {
      if (grade >= 0 && grade <= 100) {
        this.grades.push(grade);
      } else {
        console.log("Grade should be between 0 and 100.");
      }
    }
  
    calculateAverage() {
      if (this.grades.length === 0) {
        return "No grades available.";
      }
      const total = this.grades.reduce((sum, grade) => sum + grade, 0);
      return (total / this.grades.length).toFixed(2);
    }
  
    getStudentInfo() {
      return `${this.getDetails()}, Grades: [${this.grades.join(", ")}], Average Grade: ${this.calculateAverage()}`;
    }
  }
  
  // Management system to handle multiple students
  class StudentManagementSystem {
    constructor() {
      this.students = []; // Encapsulation: student list is private to the system
    }
  
    addStudent(name, id) {
      if (this.students.some(student => student.id === id)) {
        console.log(`Student with ID ${id} already exists.`);
        return;
      }
      const newStudent = new Student(name, id);
      this.students.push(newStudent);
      console.log(`Student ${name} added successfully.`);
    }
  
    viewStudent(id) {
      const student = this.students.find(student => student.id === id);
      if (student) {
        console.log(student.getStudentInfo());
      } else {
        console.log(`Student with ID ${id} not found.`);
      }
    }
  
    addGradeToStudent(id, grade) {
      const student = this.students.find(student => student.id === id);
      if (student) {
        student.addGrade(grade);
        console.log(`Grade ${grade} added to ${student.name}.`);
      } else {
        console.log(`Student with ID ${id} not found.`);
      }
    }
  }
  
  // Usage example
  const sms = new StudentManagementSystem();
  
  // Adding students
  sms.addStudent("Alice", 101);
  sms.addStudent("Bob", 102);
  
  // Adding grades
  sms.addGradeToStudent(101, 85);
  sms.addGradeToStudent(101, 90);
  sms.addGradeToStudent(102, 78);
  
  // Viewing student details
  sms.viewStudent(101);
  sms.viewStudent(102);
  sms.viewStudent(103); // Non-existent student
  
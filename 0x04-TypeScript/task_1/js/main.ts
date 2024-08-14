// 1. Let's build a Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
};

// 2. Extending the Teacher class
interface Directors extends Teacher {
  numberOfReports: number;
};


// 3. Printing teachers
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
};

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${firstInitial}. ${formattedLastName}`;
};


// 4. Writing a class
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
};

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
};

class Student implements StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
};


// Examples
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

const teacherName = printTeacher("John", "Doe");

const student1 = new Student("Alice", "Smith");


console.log(teacher3);
console.log(director1);
console.log(teacherName);
console.log(student1.workOnHomework());
console.log(student1.displayName());

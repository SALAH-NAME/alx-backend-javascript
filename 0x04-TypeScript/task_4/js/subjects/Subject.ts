namespace Subjects {
  export class Subject {
    protected teacher: Teacher | undefined; // Change 'private' to 'protected'

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
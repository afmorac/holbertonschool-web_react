namespace Subjects {
    export class Subject {
      teacher!: Teacher; // "!" fix para el assignment
  
      setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
      }
    }
  }
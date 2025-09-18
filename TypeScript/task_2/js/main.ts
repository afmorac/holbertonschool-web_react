export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  export class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
  
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
  
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }
  
  export class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
  
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
  
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }
  
  export function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  
  console.log(createEmployee(200));   // Teacher
  console.log(createEmployee(1000));  // Director
  console.log(createEmployee('$500')); // Director
  
  const pre5 = document.createElement('pre');
  pre5.textContent = [
    `200 -> ${createEmployee(200).constructor.name}`,
    `1000 -> ${createEmployee(1000).constructor.name}`,
    `"$500" -> ${createEmployee('$500').constructor.name}`,
  ].join('\n');
  document.body.appendChild(pre5);

  //task6

export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

console.log(executeWork(createEmployee(200)));   
console.log(executeWork(createEmployee(1000)));  

const pre6 = document.createElement('pre');
pre6.textContent = [
  `200 -> ${executeWork(createEmployee(200))}`,
  `1000 -> ${executeWork(createEmployee(1000))}`,
].join('\n');
document.body.appendChild(pre6);

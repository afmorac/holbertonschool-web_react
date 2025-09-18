export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
  
    [propName: string]: any;
  }
  
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
  
  const pre1 = document.createElement('pre');
  pre1.textContent = JSON.stringify(teacher3, null, 2);
  document.body.appendChild(pre1);
  
  //task2
  export interface Directors extends Teacher {
    numberOfReports: number;
  }

  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

console.log('Director example:', director1);

const pre2 = document.createElement('pre');
pre2.textContent = JSON.stringify(director1, null, 2);
document.body.appendChild(pre2);

//task3
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

console.log('print Teacher:', printTeacher('John', 'Doe'));

const pre3 = document.createElement('pre');
pre3.textContent = printTeacher('John', 'Doe');
document.body.appendChild(pre3);

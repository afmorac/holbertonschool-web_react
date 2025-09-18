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
  
  const pre = document.createElement('pre');
  pre.textContent = JSON.stringify(teacher3, null, 2);
  document.body.appendChild(pre);
  
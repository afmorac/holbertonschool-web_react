export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: 'Andrés',
    lastName: 'Mora',
    age: 29,
    location: 'San Juan',
  };
  
  const student2: Student = {
    firstName: 'Lorraine',
    lastName: 'R.',
    age: 28,
    location: 'Bayamón',
  };
  
  const studentsList: Student[] = [student1, student2];
  
  function renderTable(students: Student[]): void {

    const table: HTMLTableElement = document.createElement('table');
    const thead: HTMLTableSectionElement = document.createElement('thead');
    const tbody: HTMLTableSectionElement = document.createElement('tbody');
  

    const headRow: HTMLTableRowElement = document.createElement('tr');
    const thName: HTMLTableCellElement = document.createElement('th');
    const thLocation: HTMLTableCellElement = document.createElement('th');
    thName.textContent = 'First Name';
    thLocation.textContent = 'Location';
    headRow.appendChild(thName);
    headRow.appendChild(thLocation);
    thead.appendChild(headRow);
  
    students.forEach((s) => {
      const tr: HTMLTableRowElement = document.createElement('tr');
      const tdName: HTMLTableCellElement = document.createElement('td');
      const tdLocation: HTMLTableCellElement = document.createElement('td');
  
      tdName.textContent = s.firstName;
      tdLocation.textContent = s.location;
  
      tr.appendChild(tdName);
      tr.appendChild(tdLocation);
      tbody.appendChild(tr);
    });
  
    table.appendChild(thead);
    table.appendChild(tbody);
  
    document.body.appendChild(table);
  }
  
  renderTable(studentsList);
  
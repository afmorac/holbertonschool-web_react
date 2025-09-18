/// <reference path="./crud.d.ts" />

import { RowId, RowElement } from "./interface";
import * as CRUD from './crud.js';

const row: RowElement = {
    firstName: 'Andres',
    lastName: 'Mora',
};

const newRowId: RowId = CRUD.insertRow(row);

const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowId, updatedRow);

CRUD.deleteRow(newRowId);

const pre = document.createElement('pre');
pre.textContent = [
  `Inserted -> id ${newRowId}`,
  `Updated  -> id ${newRowId} with age 23`,
  `Deleted  -> id ${newRowId}`,
].join('\n');
document.body.appendChild(pre);



/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
var student1 = {
    firstName: 'Andrés',
    lastName: 'Mora',
    age: 29,
    location: 'San Juan',
};
var student2 = {
    firstName: 'Lorraine',
    lastName: 'R.',
    age: 28,
    location: 'Bayamón',
};
var studentsList = [student1, student2];
function renderTable(students) {
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var headRow = document.createElement('tr');
    var thName = document.createElement('th');
    var thLocation = document.createElement('th');
    thName.textContent = 'First Name';
    thLocation.textContent = 'Location';
    headRow.appendChild(thName);
    headRow.appendChild(thLocation);
    thead.appendChild(headRow);
    students.forEach(function (s) {
        var tr = document.createElement('tr');
        var tdName = document.createElement('td');
        var tdLocation = document.createElement('td');
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7O0FDQ0UsSUFBTSxRQUFRLEdBQVk7SUFDeEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsUUFBUSxFQUFFLE1BQU07SUFDaEIsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsVUFBVTtDQUNyQixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQVk7SUFDeEIsU0FBUyxFQUFFLFVBQVU7SUFDckIsUUFBUSxFQUFFLElBQUk7SUFDZCxHQUFHLEVBQUUsRUFBRTtJQUNQLFFBQVEsRUFBRSxTQUFTO0NBQ3BCLENBQUM7QUFFRixJQUFNLFlBQVksR0FBYyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUVyRCxTQUFTLFdBQVcsQ0FBQyxRQUFtQjtJQUV0QyxJQUFNLEtBQUssR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRSxJQUFNLEtBQUssR0FBNEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2RSxJQUFNLEtBQUssR0FBNEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUd2RSxJQUFNLE9BQU8sR0FBd0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRSxJQUFNLE1BQU0sR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRSxJQUFNLFVBQVUsR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RSxNQUFNLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztJQUNsQyxVQUFVLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNwQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUUzQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztRQUNqQixJQUFNLEVBQUUsR0FBd0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxJQUFNLE1BQU0sR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFNLFVBQVUsR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0RSxNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDakMsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRXBDLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQixLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXpCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFFRCxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGludGVyZmFjZSBTdHVkZW50IHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgIGFnZTogbnVtYmVyO1xuICAgIGxvY2F0aW9uOiBzdHJpbmc7XG4gIH1cbiAgXG4gIGNvbnN0IHN0dWRlbnQxOiBTdHVkZW50ID0ge1xuICAgIGZpcnN0TmFtZTogJ0FuZHLDqXMnLFxuICAgIGxhc3ROYW1lOiAnTW9yYScsXG4gICAgYWdlOiAyOSxcbiAgICBsb2NhdGlvbjogJ1NhbiBKdWFuJyxcbiAgfTtcbiAgXG4gIGNvbnN0IHN0dWRlbnQyOiBTdHVkZW50ID0ge1xuICAgIGZpcnN0TmFtZTogJ0xvcnJhaW5lJyxcbiAgICBsYXN0TmFtZTogJ1IuJyxcbiAgICBhZ2U6IDI4LFxuICAgIGxvY2F0aW9uOiAnQmF5YW3Ds24nLFxuICB9O1xuICBcbiAgY29uc3Qgc3R1ZGVudHNMaXN0OiBTdHVkZW50W10gPSBbc3R1ZGVudDEsIHN0dWRlbnQyXTtcbiAgXG4gIGZ1bmN0aW9uIHJlbmRlclRhYmxlKHN0dWRlbnRzOiBTdHVkZW50W10pOiB2b2lkIHtcblxuICAgIGNvbnN0IHRhYmxlOiBIVE1MVGFibGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICBjb25zdCB0aGVhZDogSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xuICAgIGNvbnN0IHRib2R5OiBIVE1MVGFibGVTZWN0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gIFxuXG4gICAgY29uc3QgaGVhZFJvdzogSFRNTFRhYmxlUm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgdGhOYW1lOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgY29uc3QgdGhMb2NhdGlvbjogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIHRoTmFtZS50ZXh0Q29udGVudCA9ICdGaXJzdCBOYW1lJztcbiAgICB0aExvY2F0aW9uLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcbiAgICBoZWFkUm93LmFwcGVuZENoaWxkKHRoTmFtZSk7XG4gICAgaGVhZFJvdy5hcHBlbmRDaGlsZCh0aExvY2F0aW9uKTtcbiAgICB0aGVhZC5hcHBlbmRDaGlsZChoZWFkUm93KTtcbiAgXG4gICAgc3R1ZGVudHMuZm9yRWFjaCgocykgPT4ge1xuICAgICAgY29uc3QgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgY29uc3QgdGROYW1lOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICBjb25zdCB0ZExvY2F0aW9uOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIFxuICAgICAgdGROYW1lLnRleHRDb250ZW50ID0gcy5maXJzdE5hbWU7XG4gICAgICB0ZExvY2F0aW9uLnRleHRDb250ZW50ID0gcy5sb2NhdGlvbjtcbiAgXG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZE5hbWUpO1xuICAgICAgdHIuYXBwZW5kQ2hpbGQodGRMb2NhdGlvbik7XG4gICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0cik7XG4gICAgfSk7XG4gIFxuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRoZWFkKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZCh0Ym9keSk7XG4gIFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFibGUpO1xuICB9XG4gIFxuICByZW5kZXJUYWJsZShzdHVkZW50c0xpc3QpO1xuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
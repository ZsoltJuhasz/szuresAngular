import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empfilter',
})
export class EmpfilterPipe implements PipeTransform {
  transform(employees: any[], filter: number): any {
    if (!employees || !filter) {
      return employees;
    }
    return employees.filter(employee => {
      return employee.positionId == filter;
    });
  }
}

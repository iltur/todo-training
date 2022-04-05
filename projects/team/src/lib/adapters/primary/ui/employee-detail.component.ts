import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';
import { GETS_ONE_EMPLOYEE_DTO, GetsOneEmployeeDtoPort } from '../../../application/ports/secondary/gets-one-employee.dto-port';

@Component({ selector: 'lib-employee-detail', templateUrl: './employee-detail.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class EmployeeDetailComponent {
  employee$: Observable<EmployeeDTO> = this._getsOneEmployeeDto.getOne(
    this._activatedRoute.snapshot.params.employeeId
  );

  constructor(@Inject(GETS_ONE_EMPLOYEE_DTO)
  private _getsOneEmployeeDto: GetsOneEmployeeDtoPort,
    private _activatedRoute: ActivatedRoute) {
  }
}

import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';
import { GETS_ALL_EMPLOYEE_DTO, GetsAllEmployeeDtoPort } from '../../../application/ports/secondary/gets-all-employee.dto-port';
import { map } from 'rxjs/operators';
import { CONTEXT_DTO_STORAGE, ContextDtoStoragePort } from '../../../application/ports/secondary/context-dto.storage-port';

@Component({
    selector: 'lib-our-team',
    templateUrl: './our-team.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurTeamComponent {
    employeeList$: Observable<EmployeeDTO[]> = this._getsAllEmployeeDto.getAll()
        .pipe(
            map((employeeList: EmployeeDTO[]) =>
                employeeList.sort((a, b) => a.order - b.order)
            )
        );


    constructor(@Inject(GETS_ALL_EMPLOYEE_DTO) private _getsAllEmployeeDto: GetsAllEmployeeDtoPort, @Inject(CONTEXT_DTO_STORAGE) private _contextDtoStorage: ContextDtoStoragePort) {
    }

    onEmployeeClicked(employee: EmployeeDTO): void {
        this._contextDtoStorage.next({ employeeId: employee.id });
    }
}



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PracownikDetailsPage } from './pracownik-details.page';
import { EmployeeDetailComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/employee-detail.component-module';
import { EmployeeIdResolverModule, FirebaseEmployeesServiceModule } from '@team';
import { EmployeeIdResolver } from 'projects/team/src/lib/adapters/primary/ui/employee-id.resolver';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PracownikDetailsPage,
        resolve: {
          employeeId: EmployeeIdResolver
        }
      }
    ]),
    EmployeeDetailComponentModule,
    FirebaseEmployeesServiceModule,
    EmployeeIdResolverModule,

  ],
  declarations: [PracownikDetailsPage],
  providers: [],
  exports: []
})
export class PracownikDetailsPageModule {
}

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';

@Component({
    selector: 'lib-our-team',
    templateUrl: './our-team.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurTeamComponent {
    employees$: Observable<EmployeeDTO[]> = of([
        {
            image: "http://mojcavalier.pl/wp-content/uploads/2019/10/dog-2442253_640-1.jpg",
            alt: "blenheim",
            name: "HUGO",
            position: "PREZES STADA",
            detail: "/pracownik/Hugo",
            department: [{
                name: "Cavalier",
                employeeCount: 1,
            }
            ]
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Persi_-_Cavalier_tricolor.jpg",
            alt: "tricolor",
            name: "CIASTEK",
            position: "VICE PREZES STADA",
            detail: '/pracownik/Ciastek',
            department: [{
                name: "Cavalier",
                employeeCount: 2,
            }
            ]
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbBw6gl8hCVGenOgks8bL-6FUY9-bLHAddnQ&usqp=CAU",
            alt: "black&tan",
            name: "LOLA",
            position: "SKARBNIK STADA",
            detail: "/pracownik/Lola",
            department: [{
                name: "Cavalier",
                employeeCount: 3,
            }],
        }

    ])
}

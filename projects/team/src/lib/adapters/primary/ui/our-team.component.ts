import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core' ;
import { ActivatedRoute } from '@angular/router';

@Component({ 
    selector: 'lib-our-team', 
    templateUrl: './our-team.component.html',
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush })
export class OurTeamComponent {
    
}

import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({ selector: 'lib-pracownik-details-page', templateUrl: './pracownik-details.page.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })

export class PracownikDetailsPage {
    params$ = this._activatedRoute.params;
    constructor(private _activatedRoute: ActivatedRoute) {}
}

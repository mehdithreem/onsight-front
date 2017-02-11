/**
 * Created by mehdithreem on 2/11/17.
 */

import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList} from "@angular/core";
import {Router} from "@angular/router";
import {forEach} from "@angular/router/src/utils/collection";

declare let jQuery: any;

@Component({
	moduleId: module.id,
	templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit, AfterViewInit {
	constructor(private router: Router) {}
	@ViewChild("accordion") accordion: ElementRef;
	@ViewChildren("accordion") accordions: QueryList<ElementRef>;

	ngOnInit() {

	}

	ngAfterViewInit() {
		// jQuery(this.accordion.nativeElement).accordion();
		// this.accordions.changes.subscribe(child => {
		// 	jQuery(child.nativeElement).accordion();
		// });
	}

	logout() {
		this.router.navigate(['/login']);
	}
}

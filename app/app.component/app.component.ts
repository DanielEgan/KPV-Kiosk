import { Component, provide } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: "app",
    templateUrl: "app/app.component/app.component.html",
    styleUrls: ["app/app.component/app.component.css"],
    directives: [ROUTER_DIRECTIVES],
})
export class AppComponent {
    constructor(){
    }
}


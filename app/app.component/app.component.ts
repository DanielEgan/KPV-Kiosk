import { Component, provide } from "@angular/core";
import { KidSelectComponent } from "../kid-select.component/kid-select.component";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: "app",
    templateUrl: "app/app.component/app.component.html",
    directives: [ROUTER_DIRECTIVES, KidSelectComponent],
    styleUrls: ["app/app.component/app.component.css"],
})
export class AppComponent {
    constructor(){
    }
}


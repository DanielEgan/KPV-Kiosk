import { Component, provide } from "@angular/core";
import { KidSelectComponent } from "../kid-select.component/kid-select.component";

@Component({
    selector: "app",
    templateUrl: "app/app.component/app.component.html",
    directives: [KidSelectComponent],
    styleUrls: ["app/app.component/app.component.css"],
})
export class AppComponent {
    constructor(){
    }
}


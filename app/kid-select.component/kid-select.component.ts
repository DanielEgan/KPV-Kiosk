import { Component, provide } from "@angular/core";
import { RaceService } from "../race.service/race.service"
import { DashboardComponent } from "../dashboard.component/dashboard.component";
import { RowerListComponent } from "../rower-list.component/rower-list.component";

@Component({
    selector: "kid-select",
    templateUrl: "app/kid-select.component/kid-select.component.html",
    directives: [],
    providers: [],
    styleUrls:["app/kid-select.component/kid-select.component.css"]
})
export class KidSelectComponent {
    kids = [];
    constructor() {
        for(let i = 1; i <= 15; i++) this.kids.push(i);
        
    }

    leftpad(n:any, width:number, z?:string) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
}


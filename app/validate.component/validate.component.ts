import { Component, provide, ElementRef } from "@angular/core";
import {ActivatedRoute} from '@angular/router';
import {DomSanitizationService} from '@angular/platform-browser';

@Component({
    selector: "validate",
    templateUrl: "app/validate.component/validate.component.html",
    styleUrls: ["app/validate.component/validate.component.css"],
    directives: [],
    providers: []
})
export class ValidateComponent {
    id: number;
    streamUrl: string = "";
    foo: string = 'initial';

    constructor(route: ActivatedRoute, private sanitizer: DomSanitizationService, private element: ElementRef) {
        this.id = route.snapshot.params['id'];
    }

    startStream() {
        // let component = this;
        navigator.getUserMedia(
            { video: true },
            stream => {
                // component.streamUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(stream)).toString();
                // this.streamUrl = window.URL.createObjectURL(stream);
                this.element.nativeElement.querySelector('video').src = window.URL.createObjectURL(stream); 
            },
            err => console.error(err)
        );
    }

}


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

    ngOnInit() {
        this.startStream();
        setInterval(this.snapshot,5000) //likely increase this to 500 or so
    }

    snapshot() {
        let canvas = this.element.nativeElement.querySelector('#canvas');
        let video = this.element.nativeElement.querySelector('video');
        canvas.getContext('2d').drawImage(video, 0,0, 300, 150);
        var dataURI = canvas.toDataURL('image/jpeg'); // can also use 'image/png'
        //can we send the dataURI to the rest service?
    }

    startStream() {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        if(navigator.getUserMedia) {
            navigator.getUserMedia(
                { video: {width: 1280, height: 720} },
                stream => {
                    //directly accessing the DOM... it's dirty but it works
                    this.element.nativeElement.querySelector('video').src = window.URL.createObjectURL(stream); 
                },
                err => console.error(err)
            );

        }
    }

}


import { Component, input } from "@angular/core";

@Component({
    selector: 'content-card-vertical',
    template: `<p>{{testText()}}</p>`
})

export class ContentCardVertical {
    testText = input<string>("placeholder")
}
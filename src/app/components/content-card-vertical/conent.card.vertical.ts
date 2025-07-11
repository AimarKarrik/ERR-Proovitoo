import { Component, input } from "@angular/core";

@Component({
    selector: 'content-card-vertical',
    template: `<p>{{title()}}</p>`
})

export class ContentCardVertical {
    title = input<string>("content-card-vertical_placeholder")
}
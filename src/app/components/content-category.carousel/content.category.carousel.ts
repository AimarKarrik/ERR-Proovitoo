import { Component, input } from "@angular/core";
import { ContentCardVertical } from "../content-card-vertical/conent.card.vertical";


@Component({
    selector: 'content-category-carousel',
    imports: [ContentCardVertical],
    styles: '',
    template: `
    <h1>{{categoryData()}}</h1>
    @for (item of content; track $index) {<content-card-vertical  [title]="item.title"/>}
    

    `
})

export class ContentCategoryCarousel {
    categoryData: any = input<any>(null)
    content = [
        {
            title: "test1"
        },
        {
            title: "test2"
        },
        {
            title: "test3"
        },
    ]
}
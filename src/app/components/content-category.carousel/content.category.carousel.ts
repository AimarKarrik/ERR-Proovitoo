import { Component } from "@angular/core";
import { ContentCardVertical } from "../content-card-vertical/conent.card.vertical";


@Component({
    selector: 'content-category-carousel',
    imports: [ContentCardVertical],
    styles: '',
    template: `
    <p>CategoryScroller</p>
    @for (testItem of testData; track $index) {
        <content-card-vertical [testText]="testItem.testText"/>
    }
    `
})

export class ContentCategoryCarousel {
    testData = [
        {
            testText: "test1"
        },
        {
            testText: "test2"
        },
        {
            testText: "test3"
        }
    ]
}
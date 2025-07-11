import { Component, input } from "@angular/core";
import { ContentCardVertical } from "../content-card-vertical/conent.card.vertical";


@Component({
    selector: 'content-category-carousel',
    imports: [ContentCardVertical],
    styleUrl: './content.category.carousel.css',
    templateUrl: './content.category.carousel.html',
})

export class ContentCategoryCarousel {
    public categoryData: any = input<any>(null)
}
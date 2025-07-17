import { Component, input } from "@angular/core";
import { ContentCardVertical } from "../content-card-vertical/conent.card.vertical";
import { Scrollable } from "./scrollable.directive";


@Component({
    selector: 'content-category-carousel',
    imports: [ContentCardVertical, Scrollable],
    styleUrl: './content.category.carousel.css',
    templateUrl: './content.category.carousel.html',
})

export class ContentCategoryCarousel {
    public categoryData: any = input<any>(null);
}
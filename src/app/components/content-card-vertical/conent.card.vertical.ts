import { Component, input } from "@angular/core";

@Component({
    selector: 'content-card-vertical',
    styleUrl: './conent.card.vertical.css',
    templateUrl: './conent.card.vertical.html',
})

export class ContentCardVertical {
    cardData = input<any>()

    redirectToExternal() {
        window.location.href = this.cardData().canonicalUrl;
    }
}
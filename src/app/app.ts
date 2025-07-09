import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentCategoryCarousel } from './components/content-category.carousel/content.category.carousel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContentCategoryCarousel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ERR-Proovitoo';
}

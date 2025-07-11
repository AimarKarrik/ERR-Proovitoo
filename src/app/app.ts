import { Component, Injectable, OnInit, signal } from '@angular/core';
import { ContentCategoryCarousel } from './components/content-category-carousel/content.category.carousel';
import { ApiService } from './services/api.service';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  imports: [ContentCategoryCarousel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  categories = signal<any>({});

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData().subscribe(data => {
      this.categories.set(data.data.category.frontPage);
    });
  }
}


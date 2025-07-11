import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentCategoryCarousel } from './components/content-category.carousel/content.category.carousel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContentCategoryCarousel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  public data: any;
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.getData()
  }
  public getData() {
    const url: string = "https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee";
    this.http.get(url).subscribe(
      (resp: any) => {
        this.data = resp.data.category.frontpage
      }
    )
  }
}


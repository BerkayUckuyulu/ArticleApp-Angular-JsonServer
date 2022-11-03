import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articlesData: any;
  constructor(
    public articlesService: ArticleService,
    public baseService: BaseService
  ) {
    this.get();
  }

  ngOnInit(): void {}

  get() {
    this.baseService.getReq('/articles').subscribe((response) => {
      this.articlesData = response;
    });
  }
}

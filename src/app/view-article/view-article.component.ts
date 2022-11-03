import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  articleIndex: any;
  articlesData: any;
  username: string = '';
  comment: string = '';

  constructor(private baseService: BaseService, private route: ActivatedRoute, private articleService: ArticleService) {
    this.baseService.getReq('/articles').subscribe((response) => {
      this.articlesData = response;
      this.articleIndex = this.route.snapshot.paramMap.get('articleid');

    });
  }

  ngOnInit(): void {
  }
  addComment() {

    let obj = { username: this.username, comment: this.comment };
    this.articlesData[this.articleIndex].comments.push(obj);
    this.articleService.updateArticle(this.articlesData[this.articleIndex]).subscribe(response => {
      this.username = '';
      this.comment = '';
    })

  }


}

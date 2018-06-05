import { Component, OnInit } from '@angular/core';
import { ShowsService } from './shows.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [`
    .shows-card {
      max-width: 400px;
    }

    .artist-header-image {
      background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
      background-size: cover;
    }
  `]
})
export class ListComponent implements OnInit {
  shows;
  constructor(private showsService: ShowsService) {
    this.shows = showsService.getShows();
  }

  ngOnInit() {
  }

}

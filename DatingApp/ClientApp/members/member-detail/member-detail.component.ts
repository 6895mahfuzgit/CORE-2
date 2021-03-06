import { Component, OnInit } from '@angular/core';
import { UserService } from '../../src/app/_services/user.service';
import { AlertifyService } from '../../src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../src/app/_models/user';
import { INgxGalleryOptions, INgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})



export class MemberDetailComponent implements OnInit {


  user: User;
  gallaryOptions: INgxGalleryOptions[];
  gallaryImages: INgxGalleryImage[];



  constructor(private userService: UserService, private aletify: AlertifyService,
    private route: ActivatedRoute) {

  }




  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });

    this.gallaryOptions = [{
      width: '500px',
      height: '500px',
      imagePercent: 100,
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide,
      preview: false
    }];


    this.gallaryImages = this.getmages();

  }



  getmages() {

    const imageUrls = [];

    for (let i = 0; i < this.user.photos.length; i++) {

      imageUrls.push(

        {
          small: this.user.photos[i].url,
          medium: this.user.photos[i].url,
          big: this.user.photos[i].url,
          description: this.user.photos[i].description
        }
      );
    }

    return imageUrls;

  }



}

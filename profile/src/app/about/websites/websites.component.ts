import { Component } from '@angular/core';

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.scss']
})
export class WebsitesComponent {
  getImageUrl(imageName: string): string {
    // Add your image links here
    const imageLinks: any = {
      github: 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/mdi--github.png?alt=media&token=0e54d0a4-e2dd-4802-92bd-35336287de5f',
      live: 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/fluent--live-24-filled.png?alt=media&token=12f1ad3e-27c7-4c8f-8648-b0d95b2ae097',
     
    };

    // Check if the requested image name exists in the links
    if (imageLinks.hasOwnProperty(imageName)) {
      return imageLinks[imageName];
    } else {
      console.error(`Image with name ${imageName} not found`);
      return ''; // Return an empty string or a placeholder URL
    }
  }

}

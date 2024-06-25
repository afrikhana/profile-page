import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  
    public arch: string
    public architect: string
    public ui: string
    public analysis: string
    public sup: string
    public sup1: string

    

  constructor() {
    this.arch = '& Architecture';
    this.sup1 = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/Group%2019.png?alt=media&token=53c4d6e4-d964-4462-bd94-5de5977062e3'
    this.sup = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/support.png?alt=media&token=846e6f7c-093a-4477-9641-1585a1c47e76'
    this.analysis = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/analysit.png?alt=media&token=63ffefd8-a508-4c3c-80c2-058ec3c57216';
    this.ui = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/uiuxpic.png?alt=media&token=934f69be-5941-4199-be47-b91dc4bcb199'
    this.architect = 'https://firebasestorage.googleapis.com/v0/b/profile-7bfa2.appspot.com/o/webarchitecture.png?alt=media&token=0a308b2c-d455-4a6f-8139-261744e6948e';
  }
  
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.scss']
})
export class OwnersignupComponent {
constructor(
            private router:Router){}
            


  back(){
    this.router.navigateByUrl('owner/ownerHome')
  }
  

}

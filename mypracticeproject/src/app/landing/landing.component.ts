import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
constructor (private router:Router){}
login(){
  this.router.navigateByUrl('/login');//typescript method of routing
}
student(){
  this.router.navigateByUrl('student/studentActivity');
}
directives(){
  this.router.navigateByUrl('/directives');
}
}


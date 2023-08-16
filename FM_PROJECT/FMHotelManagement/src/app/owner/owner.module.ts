import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { SharedModule } from '../Common/shared/shared.module';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';


@NgModule({
  declarations: [
    OwnerhomeComponent,
    OwnersignupComponent,
    OwnerSuccessComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }

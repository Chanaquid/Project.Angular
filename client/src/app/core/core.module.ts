import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
<<<<<<< HEAD
=======
import { RouterModule } from '@angular/router';
import { TestErrorComponent } from './test-error/test-error.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { NgxSpinnerModule } from 'ngx-spinner';
>>>>>>> development



@NgModule({
  declarations: [
<<<<<<< HEAD
    NavBarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavBarComponent
=======
    NavBarComponent,
    TestErrorComponent,
    SectionHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    NgxSpinnerModule
  ],
  exports: [
    NavBarComponent,
    SectionHeaderComponent,
    NgxSpinnerModule
>>>>>>> development
  ]
})
export class CoreModule { }

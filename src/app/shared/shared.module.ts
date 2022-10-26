import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { SidebarComponent } from './components/sidebar.component';
import { ViewerModule } from '../viewer/viewer.module';

@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    ViewerModule,
  ],
  exports: [SidebarComponent],
})
export class SharedModule { }

import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ViewerService } from './viewer.service';
import { RouterModule } from '@angular/router';
import { ViewerPlaylogComponent } from './containers/viewer-playlog.component';
import { ViewerTextComponent } from './components/viewer-text.component';
import { ViewerImageComponent } from './components/viewer-image.component';
import { ViewerInterfaceComponent } from './components/viewer-interface.component';

import * as Hammer from 'hammerjs'; 
import { 
HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG}  
from '@angular/platform-browser'; 
  
@Injectable() 
export class MyHammerConfig extends HammerGestureConfig { 
  overrides = <any> { 
    pan: {
      direction: Hammer.DIRECTION_ALL,
    }, 
  }; 
} 

@NgModule({
  declarations: [
    ViewerTextComponent,
    ViewerImageComponent,
    ViewerInterfaceComponent,
    ViewerPlaylogComponent,
  ],
  imports: [
    HammerModule,
    CommonModule,
    ClarityModule,
    RouterModule,
  ],
  providers: [{ 
    provide: HAMMER_GESTURE_CONFIG, 
    useClass: MyHammerConfig, 
  }, 
  ViewerService],
  exports: [ViewerPlaylogComponent],
})
export class ViewerModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelperComponent } from './helper/containers/helper.component';
import { ViewerPlaylogComponent } from './viewer/containers/viewer-playlog.component';

const routes: Routes = [
  {
    path: 'helper',
    component: HelperComponent,
  },
  {
    path: 'viewer',
    component: ViewerPlaylogComponent,
  },
  {
    path: 'viewer/:title',
    component: ViewerPlaylogComponent,
  },
  {
    path: 'viewer/:title/:index',
    component: ViewerPlaylogComponent,
  },
  { path: '', redirectTo: 'viewer', pathMatch: 'full' },
  { path: '**', redirectTo: 'viewer' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

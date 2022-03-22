import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationContainerComponent } from './application-container.component';


const routes: Routes = [
  {
    path: '',
    component: ApplicationContainerComponent,
    data: {
      status: "all"
    }
  },
  {
    path: 'active',
    component: ApplicationContainerComponent,
    data: {
      status: "active"
    }
  },
  {
    path: 'completed',
    component: ApplicationContainerComponent,
    data: {
      status: "completed"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ApplicationContainerRoutingModule {}

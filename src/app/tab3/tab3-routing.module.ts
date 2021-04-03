import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { MessagePageModule } from '../../app/pages/message/message.module';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'message',
    loadChildren: () => import('../../app/pages/message/message.module').then (m => MessagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}

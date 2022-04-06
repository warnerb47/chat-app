import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavPage } from './nav.page';


const routes: Routes = [
  {
    path: '',
    component: NavPage,
    children: [
      {
        path: 'chat',
        loadChildren: () => import('../chat/chat.module').then(m => m.ChatPageModule)
      },
      {
        path: 'network',
        loadChildren: () => import('../network/network.module').then(m => m.NetworkPageModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('../setting/setting.module').then(m => m.SettingPageModule)
      },
      {
        path: '',
        redirectTo: '/chat',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavPageRoutingModule {}

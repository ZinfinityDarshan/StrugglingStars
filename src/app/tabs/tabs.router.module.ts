import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'searchtab',
        children: [
          {
            path: '',
            loadChildren: './search/search.module#SearchPageModule'
          }
        ]
      },
      {
        path: 'trendingtab',
        children: [
          {
            path: '',
            loadChildren: './trending/trending.module#TrendingPageModule'
          }
        ]
      },
      {
        path: 'acounttab',
        children: [
          {
            path: '',
            loadChildren: './acount/account.module#AccountPageModule'
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: './hometab/hometab.module#HometabPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

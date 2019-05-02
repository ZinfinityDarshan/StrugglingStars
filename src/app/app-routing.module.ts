import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'},
  // { path: 'hometab', loadChildren: './tabs/hometab/hometab.module#HometabPageModule' },
  // { path: 'trending', loadChildren: './tabs/trending/trending.module#TrendingPageModule' },
  // { path: 'account', loadChildren: './tabs/acount/account.module#AccountPageModule' },
  // { path: 'search', loadChildren: './tabs/search/search.module#SearchPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

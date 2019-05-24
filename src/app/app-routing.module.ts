import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guard/intro.guard';

const routes: Routes = [
  { path: '', loadChildren: './pages/intro/intro.module#IntroPageModule', canActivate:[IntroGuard]},
  // { path: '', loadChildren: './pages/register/register.module#RegisterPageModule'},
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'},
  // { path: 'hometab', loadChildren: './tabs/hometab/hometab.module#HometabPageModule' },
  // { path: 'trending', loadChildren: './tabs/trending/trending.module#TrendingPageModule' },
  // { path: 'account', loadChildren: './tabs/acount/account.module#AccountPageModule' },
  // { path: 'search', loadChildren: './tabs/search/search.module#SearchPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'intro', loadChildren: './pages/intro/intro.module#IntroPageModule', canActivate:[IntroGuard]},
  { path: 'notification', loadChildren: './tabs/notification/notification.module#NotificationPageModule' },
  { path: 'addpost', loadChildren: './tabs/addpost/addpost.module#AddpostPageModule' },
  { path: 'showprofile', loadChildren: './pages/showprofile/showprofile.module#ShowprofilePageModule' },
  { path: 'imageselector', loadChildren: './pages/imageselector/imageselector.module#ImageselectorPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

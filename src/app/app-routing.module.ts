import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guard/intro.guard';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './pages/intro/intro.module#IntroPageModule', canActivate:[IntroGuard,]},
  // { path: '', loadChildren: './pages/register/register.module#RegisterPageModule'},
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule',canActivate:[]},
  // { path: 'hometab', loadChildren: './tabs/hometab/hometab.module#HometabPageModule' },
  // { path: 'trending', loadChildren: './tabs/trending/trending.module#TrendingPageModule' },
  // { path: 'account', loadChildren: './tabs/acount/account.module#AccountPageModule' },
  // { path: 'search', loadChildren: './tabs/search/search.module#SearchPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule',canActivate:[] },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule',canActivate:[] },
  { path: 'intro', loadChildren: './pages/intro/intro.module#IntroPageModule', canActivate:[IntroGuard]},
  { path: 'notification', loadChildren: './tabs/notification/notification.module#NotificationPageModule',canActivate:[] },
  { path: 'addpost/:img', loadChildren: './tabs/addpost/addpost.module#AddpostPageModule',canActivate:[] },
  { path: 'imageselector', loadChildren: './pages/imageselector/imageselector.module#ImageselectorPageModule',canActivate:[] },
  { path: 'show-profile/:id', loadChildren: './tabs/show-profile/show-profile.module#ShowProfilePageModule' },
  { path: 'show-post/:id', loadChildren: './tabs/show-post/show-post.module#ShowPostPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

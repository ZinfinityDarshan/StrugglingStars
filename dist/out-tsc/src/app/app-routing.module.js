import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { IntroGuard } from './guard/intro.guard';
import { AuthGuard } from './guard/auth.guard';
var routes = [
    { path: '', loadChildren: './pages/intro/intro.module#IntroPageModule', canActivate: [IntroGuard, AuthGuard] },
    // { path: '', loadChildren: './pages/register/register.module#RegisterPageModule'},
    { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule', },
    // { path: 'hometab', loadChildren: './tabs/hometab/hometab.module#HometabPageModule' },
    // { path: 'trending', loadChildren: './tabs/trending/trending.module#TrendingPageModule' },
    // { path: 'account', loadChildren: './tabs/acount/account.module#AccountPageModule' },
    // { path: 'search', loadChildren: './tabs/search/search.module#SearchPageModule' },
    { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
    { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
    { path: 'intro', loadChildren: './pages/intro/intro.module#IntroPageModule', canActivate: [IntroGuard] },
    { path: 'notification', loadChildren: './tabs/notification/notification.module#NotificationPageModule' },
    { path: 'addpost', loadChildren: './tabs/addpost/addpost.module#AddpostPageModule' },
    { path: 'showprofile', loadChildren: './pages/showprofile/showprofile.module#ShowprofilePageModule' },
    { path: 'imageselector', loadChildren: './pages/imageselector/imageselector.module#ImageselectorPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map